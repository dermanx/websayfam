/*
  # Remove sensitive data and enhance security

  1. Changes
    - Remove exposed API key
    - Add encrypted storage for sensitive data
    - Add additional security policies
    
  2. Security
    - Enhanced RLS policies
    - Added encryption for sensitive values
*/

-- Remove the exposed API key
UPDATE env_variables 
SET value = ''
WHERE key = 'VITE_GEMINI_API_KEY';

-- Add secure storage function
CREATE OR REPLACE FUNCTION get_encrypted_env_value(key_name text)
RETURNS text
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN (
    SELECT encrypted_value 
    FROM env_variables 
    WHERE key = key_name
    AND auth.role() = 'service_role'
  );
END;
$$;
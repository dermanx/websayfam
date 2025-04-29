const ENV_ERRORS = {
  MISSING_KEY: 'VITE_GEMINI_API_KEY environment variable is missing',
  MISSING_ENCRYPTION: 'VITE_ENCRYPTION_KEY environment variable is missing',
  CONFIG_ERROR: 'Configuration error. Please contact support.',
  INVALID_CONFIG: 'Invalid configuration'
} as const;

import { RateLimit } from './types';

// Prevent API key logging
const sanitizeKey = (key: string): string => {
  return key ? '****' + key.slice(-4) : '';
};

// Add request rate limiting
const requestLimiter = new Map<string, RateLimit>();
const RATE_LIMIT = 100; // requests per minute
const RATE_WINDOW = 60000; // 1 minute in milliseconds
export function checkRateLimit(userId: string): boolean {
  const now = Date.now();
  const userLimit = requestLimiter.get(userId);

  if (!userLimit) {
    requestLimiter.set(userId, { count: 1, timestamp: now });
    return true;
  }

  if (now - userLimit.timestamp > RATE_WINDOW) {
    requestLimiter.set(userId, { count: 1, timestamp: now });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }

  userLimit.count++;
  return true;
}

export function validateEnvironment(): string | null {
  // In development, return null to allow the app to work without env vars
  if (import.meta.env.DEV) {
    return null;
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;
  
  if (!apiKey) {
    return ENV_ERRORS.MISSING_KEY;
  }
  
  if (!encryptionKey) {
    return ENV_ERRORS.MISSING_ENCRYPTION;
  }
  
  // Validate Gemini API key format (starts with 'AIza')
  if (!apiKey.startsWith('AIza')) {
    console.error('Invalid API key format:', sanitizeKey(apiKey));
    return ENV_ERRORS.INVALID_CONFIG;
  }
  
  return null;
}
import { AES, enc, lib, mode, pad } from 'crypto-js';
import { SECURITY_CONFIG } from './constants';

const getEncryptionKey = (): string => {
  const key = import.meta.env.VITE_ENCRYPTION_KEY;
  if (!key && !import.meta.env.DEV) {
    throw new Error('Encryption key is required in production');
  }
  return key || 'development-encryption-key-minimum-32-chars';
};

export function generateIV(): string {
  return lib.WordArray.random(SECURITY_CONFIG.ENCRYPTION.IV_LENGTH).toString();
}

export function encryptData(data: string, iv?: string): { encrypted: string; iv: string } {
  try {
    if (!data) return { encrypted: '', iv: '' };
    
    const key = getEncryptionKey();
    const generatedIV = iv || generateIV();
    
    const encrypted = AES.encrypt(data, key, {
      iv: enc.Hex.parse(generatedIV),
      mode: mode.CBC,
      padding: pad.Pkcs7
    });

    return {
      encrypted: encrypted.toString(),
      iv: generatedIV
    };
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
}

export function decryptData(encryptedData: string, iv: string): string {
  try {
    if (!encryptedData) return '';
    
    const key = getEncryptionKey();
    
    const decrypted = AES.decrypt(encryptedData, key, {
      iv: enc.Hex.parse(iv),
      mode: mode.CBC,
      padding: pad.Pkcs7
    });

    return decrypted.toString(enc.Utf8);
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}
export const SENSITIVE_PATTERNS = {
  CREDIT_CARD: /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/,
  SSN: /\b\d{3}-?\d{2}-?\d{4}\b/,
  API_KEY: /\b(key|api[_-]?key|token|secret)[_-]?\w{16,}\b/i,
  PASSWORD: /\b(password|pwd|passwd)\b/i,
  EMAIL: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
} as const;

export const SECURITY_CONFIG = {
  ENCRYPTION: {
    ALGORITHM: 'AES',
    KEY_LENGTH: 32,
    IV_LENGTH: 16
  },
  AUTH: {
    TOKEN_EXPIRY: '24h',
    REFRESH_TOKEN_EXPIRY: '7d',
    PASSWORD_MIN_LENGTH: 12,
    MAX_LOGIN_ATTEMPTS: 5,
    LOCKOUT_DURATION: 15 * 60 * 1000 // 15 minutes
  },
  RATE_LIMIT: {
    MAX_REQUESTS: 100,
    WINDOW: 60 * 1000 // 1 minute
  }
} as const;
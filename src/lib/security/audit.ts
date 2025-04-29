import { User } from '../auth';
import { SENSITIVE_PATTERNS } from './constants';

export interface AuditEvent {
  type: 'auth' | 'data_access' | 'encryption' | 'error';
  severity: 'info' | 'warning' | 'error';
  userId?: string;
  action: string;
  resource?: string;
  details?: Record<string, unknown>;
  timestamp?: string;
}

function maskSensitiveData(data: string): string {
  let maskedData = data;
  
  Object.entries(SENSITIVE_PATTERNS).forEach(([type, pattern]) => {
    maskedData = maskedData.replace(pattern, match => {
      if (type === 'EMAIL') {
        const [local, domain] = match.split('@');
        return `${local[0]}***@${domain}`;
      }
      return '*'.repeat(match.length);
    });
  });
  
  return maskedData;
}

export async function logAuditEvent(event: AuditEvent): Promise<void> {
  const timestamp = new Date().toISOString();
  
  // Mask sensitive data in details
  const sanitizedDetails = event.details ? 
    Object.fromEntries(
      Object.entries(event.details).map(([key, value]) => [
        key,
        typeof value === 'string' ? maskSensitiveData(value) : value
      ])
    ) : {};

  const logEntry = {
    ...event,
    details: sanitizedDetails,
    timestamp,
    environment: import.meta.env.MODE
  };

  if (import.meta.env.PROD) {
    try {
      await fetch('/api/audit-logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logEntry)
      });
    } catch (error) {
      console.error('Failed to log audit event:', error);
    }
  } else {
    console.debug('Audit event:', logEntry);
  }
}
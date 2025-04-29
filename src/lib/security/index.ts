export * from './constants';
export * from './encryption';
export * from './audit';
export * from './access';

export function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove potential JavaScript
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data URLs
    .replace(/\\/g, '\\\\') // Escape backslashes
    .replace(/'/g, "\\'") // Escape single quotes
    .trim();
}
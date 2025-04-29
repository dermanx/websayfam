import { User } from '../auth';
import { logAuditEvent } from './audit';

export interface AccessControl {
  resource: string;
  action: 'read' | 'write' | 'delete';
  requiredRole: 'user' | 'admin';
}

const accessMatrix: Record<string, AccessControl[]> = {
  'chat': [
    { resource: 'chat', action: 'read', requiredRole: 'user' },
    { resource: 'chat', action: 'write', requiredRole: 'user' }
  ],
  'env_variables': [
    { resource: 'env_variables', action: 'read', requiredRole: 'admin' },
    { resource: 'env_variables', action: 'write', requiredRole: 'admin' }
  ],
  'audit_logs': [
    { resource: 'audit_logs', action: 'read', requiredRole: 'admin' }
  ]
};

export async function checkAccess(
  user: User | undefined,
  resource: string,
  action: 'read' | 'write' | 'delete'
): Promise<boolean> {
  if (!user) {
    await logAuditEvent({
      type: 'auth',
      severity: 'warning',
      action: 'access_denied',
      resource,
      details: { reason: 'no_user' }
    });
    return false;
  }

  const resourceRules = accessMatrix[resource];
  if (!resourceRules) {
    await logAuditEvent({
      type: 'auth',
      severity: 'warning',
      userId: user.id,
      action: 'access_denied',
      resource,
      details: { reason: 'no_rules' }
    });
    return false;
  }

  const rule = resourceRules.find(r => r.action === action);
  if (!rule) {
    await logAuditEvent({
      type: 'auth',
      severity: 'warning',
      userId: user.id,
      action: 'access_denied',
      resource,
      details: { reason: 'no_action_rule' }
    });
    return false;
  }

  const hasAccess = rule.requiredRole === 'user' || user.role === rule.requiredRole;
  
  await logAuditEvent({
    type: 'auth',
    severity: hasAccess ? 'info' : 'warning',
    userId: user.id,
    action: hasAccess ? 'access_granted' : 'access_denied',
    resource,
    details: { 
      requiredRole: rule.requiredRole,
      userRole: user.role
    }
  });

  return hasAccess;
}
/**
 * 权限管理工具
 * 提供简单的权限验证功能
 */

// 模拟的权限数据
// 实际应用中，这些数据可能来自数据库或者JWT解码
const PERMISSIONS_MAP: Record<string, string[]> = {
  'dev-token': ['tank-plans:read', 'tank-plans:write', 'admin'],
  'read-token': ['tank-plans:read'],
  'test-token': ['tank-plans:read'],
};

/**
 * 检查token是否有指定权限
 * @param token 用户令牌
 * @param permission 权限标识符
 * @returns 是否有权限
 */
export function hasPermission(token: string, permission: string): boolean {
  // 如果是开发环境且特殊token，直接返回true (方便开发测试)
  if (process.env.NODE_ENV === 'development' && token === 'dev-master-key') {
    return true;
  }

  // 如果token不存在于权限映射中，返回false
  if (!token || !PERMISSIONS_MAP[token]) {
    return false;
  }

  // 检查token是否拥有admin权限或指定权限
  const userPermissions = PERMISSIONS_MAP[token];
  return (
    userPermissions.includes('admin') || userPermissions.includes(permission)
  );
}

/**
 * 获取token的所有权限
 * @param token 用户令牌
 * @returns 权限列表
 */
export function getUserPermissions(token: string): string[] {
  return PERMISSIONS_MAP[token] || [];
}

/**
 * 验证令牌是否有效
 * @param token 用户令牌
 * @returns 令牌是否有效
 */
export function isValidToken(token: string): boolean {
  return !!PERMISSIONS_MAP[token];
}

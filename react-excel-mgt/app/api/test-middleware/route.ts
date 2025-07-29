import { NextRequest, NextResponse } from 'next/server';
import { getUserPermissions } from '@/utils/permissions';

/**
 * 权限测试API - GET方法
 */
export async function GET(request: NextRequest) {
  // 获取请求头中的Authorization token
  const token = request.headers.get('authorization')?.split(' ')[1] || '';

  // 获取中间件添加的权限检查头信息
  const permissionCheck = request.headers.get('X-Permission-Check');

  // 获取用户权限
  const permissions = getUserPermissions(token);

  return NextResponse.json({
    success: true,
    permissionVerified: permissionCheck === 'passed',
    tokenProvided: !!token,
    permissions,
    hasReadAccess: permissions.includes('tank-plans:read'),
    hasWriteAccess: permissions.includes('tank-plans:write'),
    hasAdminAccess: permissions.includes('admin'),
  });
}

/**
 * 权限测试API - POST方法（需要写入权限）
 */
export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1] || '';
  const permissions = getUserPermissions(token);

  // 如果请求到达这里，说明中间件已验证通过写入权限
  return NextResponse.json({
    success: true,
    message: '写入操作已通过权限验证',
    operationType: 'write',
    permissions,
  });
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { hasPermission } from './utils/permissions';

export function middleware(request: NextRequest) {
  // 获取请求路径
  const path = request.nextUrl.pathname;

  // 获取Authorization头
  const token = request.headers.get('authorization')?.split(' ')[1] || '';

  // 测试API权限控制 - 仅限测试路径
  if (path.startsWith('/api/test-middleware')) {
    // 读取权限检查
    if (request.method === 'GET' && !hasPermission(token, 'tank-plans:read')) {
      console.log(`[权限测试] 读取操作被拒绝: ${path}`);
      return NextResponse.json(
        {
          error: '没有读取权限',
          authorized: false,
        },
        { status: 403 }
      );
    }

    // 写入权限检查
    if (
      request.method === 'POST' &&
      !hasPermission(token, 'tank-plans:write')
    ) {
      console.log(`[权限测试] 写入操作被拒绝: ${path}`);
      return NextResponse.json(
        {
          error: '没有写入权限',
          authorized: false,
        },
        { status: 403 }
      );
    }
  }

  // 测试页面权限控制 - 仅模拟路径
  else if (path === '/test-middleware/restricted') {
    // 基本访问权限检查
    if (!hasPermission(token, 'tank-plans:read')) {
      console.log(`[权限测试] 页面访问被拒绝: ${path}`);
      // 重定向到403页面
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  // API权限控制
  else if (path.startsWith('/api')) {
    // 读取权限：检查所有tank-plans相关API
    if (
      path.startsWith('/api/1.0/tank-plans') &&
      !hasPermission(token, 'tank-plans:read')
    ) {
      console.log(`[权限拒绝] 用户无权访问: ${path}`);
      return NextResponse.json(
        { error: '没有权限访问此资源' },
        { status: 403 }
      );
    }

    // 写入权限：POST, PATCH, DELETE请求需要写入权限
    if (
      (request.method === 'POST' ||
        request.method === 'PATCH' ||
        request.method === 'DELETE') &&
      !hasPermission(token, 'tank-plans:write')
    ) {
      console.log(`[权限拒绝] 用户无权执行写入操作: ${path}`);
      return NextResponse.json(
        { error: '没有权限执行此操作' },
        { status: 403 }
      );
    }
  }

  // 页面权限控制
  else if (path.startsWith('/tank_plan_maintanence')) {
    // 基本访问权限检查
    if (!hasPermission(token, 'tank-plans:read')) {
      console.log(`[权限拒绝] 用户无权访问页面: ${path}`);
      // 重定向到403页面
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    // 特定子页面的写入权限检查
    if (
      (path.includes('/edit') || path.includes('/create')) &&
      !hasPermission(token, 'tank-plans:write')
    ) {
      console.log(`[权限拒绝] 用户无权访问编辑页面: ${path}`);
      // 重定向到403页面
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  // 添加自定义响应头标记中间件处理
  const response = NextResponse.next();
  response.headers.set('X-Permission-Check', 'passed');

  return response;
}

// 配置中间件匹配路径，仅匹配测试相关路径
export const config = {
  matcher: [
    // 仅匹配测试API路由
    '/api/test-middleware',
    // 仅匹配测试页面路由
    '/test-middleware/:path*',
    // 无权限页面
    '/unauthorized',
  ],
};

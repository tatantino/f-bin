'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center space-y-3 text-center">
          <AlertTriangle className="w-16 h-16 text-red-500" />
          <h1 className="text-3xl font-bold text-red-600">访问被拒绝</h1>
          <p className="text-gray-600">
            您没有权限访问请求的资源。请确保您已登录并拥有适当的权限。
          </p>
        </div>

        <div className="flex flex-col space-y-3 pt-4">
          <Button onClick={() => router.push('/')} className="w-full">
            返回首页
          </Button>

          <Button
            variant="outline"
            onClick={() => router.back()}
            className="w-full"
          >
            返回上一页
          </Button>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>如需帮助，请联系系统管理员</p>
      </div>
    </div>
  );
}

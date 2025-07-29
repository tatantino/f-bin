'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Shield, ShieldAlert, ShieldCheck, LockKeyhole } from 'lucide-react';

export default function PermissionTestPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [selectedToken, setSelectedToken] = useState('dev-token');
  const [requestMethod, setRequestMethod] = useState('GET');

  // 可用的测试令牌
  const tokens = [
    {
      value: 'dev-token',
      label: '管理员令牌 (所有权限)',
      icon: <ShieldCheck className="w-4 h-4 text-green-500" />,
    },
    {
      value: 'read-token',
      label: '只读令牌 (仅读取权限)',
      icon: <Shield className="w-4 h-4 text-blue-500" />,
    },
    {
      value: 'test-token',
      label: '测试令牌 (仅读取权限)',
      icon: <Shield className="w-4 h-4 text-blue-500" />,
    },
    {
      value: 'invalid-token',
      label: '无效令牌 (无权限)',
      icon: <ShieldAlert className="w-4 h-4 text-red-500" />,
    },
  ];

  // 发送测试请求
  const testPermission = async () => {
    setLoading(true);
    setResult(null);

    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      // 添加令牌到请求头
      if (selectedToken) {
        headers['Authorization'] = `Bearer ${selectedToken}`;
      }

      // 发送请求
      const response = await fetch('/api/test-middleware', {
        method: requestMethod,
        headers,
        ...(requestMethod !== 'GET' && {
          body: JSON.stringify({ test: true }),
        }),
      });

      const data = await response.json();
      setResult({
        status: response.status,
        data,
      });
    } catch (error) {
      setResult({
        error: true,
        message: error instanceof Error ? error.message : '未知错误',
      });
    } finally {
      setLoading(false);
    }
  };

  // 获取权限状态标签
  const getPermissionStatus = () => {
    if (!result) return null;

    if (result.status === 403) {
      return (
        <div className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm flex items-center">
          <ShieldAlert className="w-4 h-4 mr-1" />
          权限被拒绝
        </div>
      );
    }

    const { data } = result;
    if (data.hasWriteAccess) {
      return (
        <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center">
          <ShieldCheck className="w-4 h-4 mr-1" />
          完全权限
        </div>
      );
    }

    if (data.hasReadAccess) {
      return (
        <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
          <Shield className="w-4 h-4 mr-1" />
          只读权限
        </div>
      );
    }

    return (
      <div className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm flex items-center">
        <LockKeyhole className="w-4 h-4 mr-1" />
        无权限
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <ShieldCheck className="w-6 h-6 mr-2 text-blue-600" />
        权限测试页面
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>权限测试配置</CardTitle>
            <CardDescription>配置请求参数来测试权限系统</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">访问令牌</label>
              <Select value={selectedToken} onValueChange={setSelectedToken}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="选择令牌" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>访问令牌</SelectLabel>
                    {tokens.map(token => (
                      <SelectItem key={token.value} value={token.value}>
                        <div className="flex items-center">
                          {token.icon}
                          <span className="ml-2">{token.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">请求方法</label>
              <Select value={requestMethod} onValueChange={setRequestMethod}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="选择请求方法" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>HTTP方法</SelectLabel>
                    <SelectItem value="GET">GET (读取操作)</SelectItem>
                    <SelectItem value="POST">POST (写入操作)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={testPermission}
              disabled={loading}
              className="w-full"
            >
              {loading ? '请求中...' : '测试权限'}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>权限检查结果</CardTitle>
              <CardDescription>中间件权限验证响应</CardDescription>
            </div>
            {getPermissionStatus()}
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="mb-2 font-medium">
                  状态码:{' '}
                  <span
                    className={
                      result.status >= 400 ? 'text-red-600' : 'text-green-600'
                    }
                  >
                    {result.status}
                  </span>
                </div>
                <pre className="text-xs overflow-auto max-h-[300px] bg-white p-3 rounded border">
                  {JSON.stringify(result.data || result, null, 2)}
                </pre>
              </div>
            ) : (
              <div className="text-gray-500 italic flex items-center justify-center h-[300px]">
                点击"测试权限"按钮查看结果
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>权限控制说明</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>中间件会在请求到达路由前检查权限</li>
              <li>API请求通过状态码判断权限，页面请求会重定向到403页面</li>
              <li>
                令牌权限级别：
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li className="flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1 text-green-500" />
                    <code className="bg-gray-100 px-1">dev-token</code>:
                    具有所有权限
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-blue-500" />
                    <code className="bg-gray-100 px-1">read-token</code>:
                    只有读取权限
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-blue-500" />
                    <code className="bg-gray-100 px-1">test-token</code>:
                    只有读取权限
                  </li>
                  <li className="flex items-center">
                    <ShieldAlert className="w-4 h-4 mr-1 text-red-500" />
                    <code className="bg-gray-100 px-1">invalid-token</code>:
                    无权限
                  </li>
                </ul>
              </li>
              <li>POST、PATCH、DELETE请求被视为写入操作，需要写入权限</li>
              <li>尝试访问编辑页面也需要写入权限</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

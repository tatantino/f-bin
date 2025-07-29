'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { TABLE_CONFIG } from '../config/constants';

/**
 * 表格骨架屏组件
 * 根据实际表格配置生成对应的加载效果
 */
export function TableSkeleton() {
  return (
    <div className="w-full space-y-3 rounded-md border">
      {/* 表头 */}
      <div className="border-b bg-muted/50 px-4 py-3">
        <div className="grid grid-cols-7 gap-4">
          {TABLE_CONFIG.columns.map((col, index) => (
            <div key={col.key} className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              {col.sortable && <Skeleton className="h-3 w-3" />}
            </div>
          ))}
        </div>
      </div>

      {/* 表格内容 */}
      {Array.from({ length: 15 }).map((_, rowIndex) => (
        <div key={rowIndex} className="border-b px-4 py-3 last:border-0">
          <div className="grid grid-cols-7 gap-4">
            {TABLE_CONFIG.columns.map(col => (
              <div key={col.key}>
                <Skeleton
                  className={`h-4 ${
                    col.key.includes('timestamp')
                      ? 'w-24'
                      : col.key === 'dmd_remark'
                        ? 'w-48'
                        : 'w-32'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

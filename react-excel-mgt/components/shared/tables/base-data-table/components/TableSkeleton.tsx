import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Column } from '../types';

interface TableSkeletonProps {
  /**
   * 表格列配置，影响骨架屏列数
   */
  columns?: number | Column<any>[];
  /**
   * 显示的行数
   */
  rows?: number;
  /**
   * 是否显示操作列
   */
  showActions?: boolean;
}

/**
 * 通用表格骨架屏组件
 * 根据列配置生成对应的加载效果
 */
export function TableSkeleton({
  columns = 5,
  rows = 5,
  showActions = true,
}: TableSkeletonProps) {
  // 确定列数
  const columnCount = typeof columns === 'number' ? columns : columns.length;
  // 如果有操作列则增加一列
  const totalColumns = showActions ? columnCount + 1 : columnCount;

  return (
    <div className="w-full rounded-md border bg-card shadow-sm">
      <Table>
        {/* 表头 */}
        <TableHeader>
          <TableRow>
            {Array.from({ length: totalColumns }).map((_, index) => (
              <TableHead key={index} className="border-b bg-muted/50 h-10">
                <div className="flex items-center">
                  <Skeleton className="h-4 w-20" />
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* 表格内容 */}
        <TableBody className="divide-y divide-border">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: totalColumns }).map((_, colIndex) => (
                <TableCell key={colIndex} className="py-3">
                  <Skeleton
                    className={`h-4 ${
                      colIndex === 0
                        ? 'w-32'
                        : colIndex === totalColumns - 1 && showActions
                          ? 'w-20'
                          : colIndex === columnCount - 1
                            ? 'w-48'
                            : 'w-24'
                    }`}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

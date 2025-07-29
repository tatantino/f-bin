import { useState, useCallback, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { VersionService } from './service';
import type { UseVersionInfoReturn, UseParentVersionIdReturn } from './types';
import type { PlanVersion } from '../../_shared/types';

export function useVersionInfo(versionId: number): UseVersionInfoReturn {
  const [version, setVersion] = useState<PlanVersion | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // 使用ref来缓存数据和跟踪加载状态
  const loadedVersionId = useRef<number | null>(null);

  const loadVersionInfo = useCallback(async () => {
    // 如果无效ID或已加载相同ID的数据，则跳过
    if (!versionId || versionId <= 0 || versionId === loadedVersionId.current)
      return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await VersionService.getVersionInfo(versionId);
      setVersion(data);
      // 记录已加载的版本ID
      loadedVersionId.current = versionId;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred';
      setError(message);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  }, [versionId, toast]);

  useEffect(() => {
    // 只有当ID变化或未加载过时才加载数据
    if (versionId > 0 && versionId !== loadedVersionId.current) {
      loadVersionInfo();
    }
  }, [loadVersionInfo, versionId]);

  // 提供一个强制刷新方法，允许手动重新获取数据
  const refresh = useCallback(async () => {
    // 重置缓存状态，强制重新加载
    loadedVersionId.current = null;
    await loadVersionInfo();
  }, [loadVersionInfo]);

  return {
    version,
    isLoading,
    error,
    refresh,
  };
}

export function useParentVersionId(
  versionId: number
): UseParentVersionIdReturn {
  const [parentId, setParentId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const loadedVersionId = useRef<number | null>(null);

  useEffect(() => {
    async function loadParentId() {
      // 如果无效ID或已加载相同ID的数据，则跳过
      if (!versionId || versionId <= 0 || versionId === loadedVersionId.current)
        return;

      setIsLoading(true);
      try {
        const id = await VersionService.getParentId(versionId);
        setParentId(id);
        loadedVersionId.current = versionId;
      } catch (error) {
        // 静默处理错误，保持parentId为null
      } finally {
        setIsLoading(false);
      }
    }

    loadParentId();
  }, [versionId]);

  return {
    parentId,
    isLoading,
  };
}

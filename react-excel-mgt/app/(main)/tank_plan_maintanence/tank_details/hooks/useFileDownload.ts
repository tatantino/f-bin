import { useCallback } from 'react';

interface DownloadUrlResult {
  url: string;
  cleanup: () => void;
}

export function useFileDownload() {
  const createDownloadUrl = useCallback((blob: Blob): DownloadUrlResult => {
    const url = window.URL.createObjectURL(blob);
    return {
      url,
      cleanup: () => window.URL.revokeObjectURL(url),
    };
  }, []);

  const downloadFile = useCallback(
    (blob: Blob, filename: string) => {
      const { url, cleanup } = createDownloadUrl(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      cleanup();
    },
    [createDownloadUrl]
  );

  return {
    downloadFile,
  };
}

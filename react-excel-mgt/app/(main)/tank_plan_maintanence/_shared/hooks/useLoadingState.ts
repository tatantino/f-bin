import { useMemo, useCallback } from 'react';

interface LoadingStates {
  isLoadingData?: boolean;
  isLoadingVersion?: boolean;
  isLoadingLatest?: boolean;
  isUploading?: boolean;
  isTransitioning?: boolean;
  isExporting?: boolean;
  isSaving?: boolean;
  isValidating?: boolean;
}

interface LoadingStateOptions {
  onLoadingStart?: () => void;
  onLoadingEnd?: () => void;
}

export function useLoadingState(
  states: LoadingStates,
  options?: LoadingStateOptions
) {
  const isLoading = useMemo(() => {
    const loading = Object.values(states).some(state => state === true);

    if (loading) {
      options?.onLoadingStart?.();
    } else {
      options?.onLoadingEnd?.();
    }

    return loading;
  }, [states, options]);

  const getLoadingMessage = useCallback(() => {
    if (states.isLoadingData) return 'Loading data...';
    if (states.isLoadingVersion) return 'Loading version...';
    if (states.isLoadingLatest) return 'Loading latest plan...';
    if (states.isUploading) return 'Uploading...';
    if (states.isTransitioning) return 'Processing...';
    if (states.isExporting) return 'Exporting...';
    if (states.isSaving) return 'Saving...';
    if (states.isValidating) return 'Validating...';

    const activeState = Object.entries(states).find(
      ([_, value]) => value === true
    );
    if (activeState) {
      const readableState = activeState[0]
        .replace(/^is/, '')
        .replace(/([A-Z])/g, ' $1')
        .trim();
      return `${readableState}...`;
    }

    return 'Loading...';
  }, [states]);

  const getActiveStates = useCallback(() => {
    return Object.entries(states)
      .filter(([_, value]) => value === true)
      .map(([key]) => key);
  }, [states]);

  const normalizedStates = useMemo(() => {
    return {
      isSaving: !!states.isSaving,
      isExporting: !!states.isExporting,
      isValidating: !!states.isValidating,
      ...Object.entries(states).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: !!value,
        }),
        {} as Record<string, boolean>
      ),
    };
  }, [states]);

  return {
    isLoading,
    getLoadingMessage,
    getActiveStates,
    states: normalizedStates,
  } as const;
}

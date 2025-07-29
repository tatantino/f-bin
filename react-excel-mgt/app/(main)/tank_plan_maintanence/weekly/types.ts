/**
 * Type definitions for weekly plan module
 */

export interface LoadingState {
  isLoading: boolean;
  getLoadingMessage: () => string;
  getActiveStates: () => string[];
  states: {
    isSaving: boolean;
    isExporting: boolean;
    isValidating: boolean;
    [key: string]: boolean;
  };
}

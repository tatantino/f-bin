export type ValidationStatus = 'pending' | 'processing' | 'success' | 'error';

export type ValidationStepId = 'format' | 'required' | 'business' | 'save';

export type ValidationStep = {
  id: ValidationStepId;
  label: string;
  status: ValidationStatus;
  message?: string;
};

export type ValidationError = string;

export type ValidationResult = {
  success: boolean;
  errors: ValidationError[];
};

export interface ValidationConfig<T> {
  module: string;
  steps: ValidationStep[];
  validateFormat?: (data: T[]) => Promise<ValidationError[]>;
  validateRequired?: (data: T[]) => Promise<ValidationError[]>;
  validateBusiness?: (
    data: T[],
    originalData?: T[]
  ) => Promise<ValidationError[]>;
}

export type ValidationContext = {
  module: string;
  function: string;
  timestamp: number;
};

export type ValidationState = {
  steps: ValidationStep[];
  errors: ValidationError[];
  isValidating: boolean;
};

import { ValidationContext, ValidationError, ValidationResult } from './types';

export const MIN_VALIDATION_DURATION = 800;

export async function withMinDuration<T>(promise: Promise<T>): Promise<T> {
  const [result] = await Promise.all([
    promise,
    new Promise(resolve => setTimeout(resolve, MIN_VALIDATION_DURATION)),
  ]).catch(error => {
    throw error instanceof Error ? error : new Error('验证操作失败');
  });
  return result;
}

export function createValidationContext(
  module: string,
  action: string
): ValidationContext {
  return {
    module,
    function: action,
    timestamp: Date.now(),
  };
}

export function createValidationResult(
  errors: ValidationError[]
): ValidationResult {
  return {
    success: errors.length === 0,
    errors,
  };
}

export function getErrorMessage(error: unknown): ValidationError {
  return error instanceof Error ? error.message : '验证过程中发生错误';
}

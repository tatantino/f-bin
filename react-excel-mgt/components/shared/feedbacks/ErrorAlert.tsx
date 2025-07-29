import { AlertCircle } from 'lucide-react';
import { ReactNode } from 'react';

export interface ErrorAlertProps {
  /** Main error message to display */
  message: string;

  /** Optional description or additional details */
  description?: string;

  /** Custom alert icon (defaults to AlertCircle) */
  icon?: ReactNode;

  /** Optional CSS class name for additional styling */
  className?: string;

  /** Optional custom content instead of message/description */
  children?: ReactNode;
}

/**
 * Error alert component for displaying error messages
 *
 * Can be used for API failures, validation errors, or other error scenarios
 * Supports custom content, styling, and icons
 */
export function ErrorAlert({
  message,
  description,
  icon = <AlertCircle className="h-5 w-5 text-red-500" />,
  className = '',
  children,
}: ErrorAlertProps) {
  return (
    <div
      className={`rounded-md border border-red-200 bg-red-50 p-4 ${className}`}
    >
      {children ? (
        children
      ) : (
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 pt-0.5">{icon}</div>
          <div>
            <p className="text-sm font-medium text-red-800">{message}</p>
            {description && (
              <p className="mt-1 text-sm text-red-700">{description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

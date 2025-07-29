import { useRouter } from 'next/navigation';
import { IconButton } from '@/components/shared/buttons';

interface BackLinkProps {
  /** Target route to navigate to. If not provided, will use browser's back navigation */
  to?: string;
  /** Custom class name */
  className?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler that overrides default behavior when provided */
  onClick?: () => void;
}

/**
 * A generic back navigation component
 * @example
 * ```tsx
 * // Navigate to specific route
 * <BackLink to={ROUTES.HOME} />
 *
 * // Go back to previous page
 * <BackLink />
 *
 * // Custom navigation behavior
 * <BackLink onClick={handleCustomBack} />
 * ```
 */
export function BackLink({ to, className, disabled, onClick }: BackLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      router.push(to);
    } else {
      router.back();
    }
  };

  return (
    <IconButton
      action="back"
      onClick={handleClick}
      disabled={disabled}
      className={className}
    />
  );
}

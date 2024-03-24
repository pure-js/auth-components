import { cn } from '@/utils/index';
import { btn, btnBase, btnSize } from './button.css.ts';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  isPrimary?: boolean;
  /**
   * How large should the button be?
   */
  size?: keyof typeof btnSize;
  /**
   * Button contents
   */
  label: string;
  isDisabled?: boolean;
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  isPrimary = false,
  size = 'md',
  label,
  isDisabled,
  className,
  ...props
}: ButtonProps) => {
  const mode = isPrimary ? 'primary' : 'secondary';
  return (
    <button
      type="button"
      className={cn(className, btnBase, btnSize[size], btn[mode])}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>
  );
};

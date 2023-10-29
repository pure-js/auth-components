import { getCssNameBySize } from '@/utils/index';
import button from './button.module.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
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
  primary = false,
  size = 'md',
  label,
  isDisabled,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? button.primary : '';
  const $size = getCssNameBySize(size);
  return (
    <button
      type="button"
      className={[className, button.default, button[$size], mode].join(' ')}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>
  );
};

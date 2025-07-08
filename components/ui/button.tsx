import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type Variant = 'default' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const base = 'rounded px-4 py-2 font-medium transition';
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
      ghost: 'bg-transparent text-blue-600 hover:bg-blue-50'
    };
    const sizes = {
      sm: 'text-sm py-1 px-2',
      md: 'text-base',
      lg: 'text-lg py-3 px-6'
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

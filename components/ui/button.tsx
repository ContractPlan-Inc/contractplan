// components/ui/button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md';
};

export function Button({ children, variant = 'default', size = 'md', className, ...props }: ButtonProps) {
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-100',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
  };

  return (
    <button
      {...props}
      className={clsx(
        'rounded font-medium transition duration-150 ease-in-out',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </button>
  );
}


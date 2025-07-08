// components/ui/button.tsx
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'; // ✅ add 'ghost' here
}

export function Button({ children, variant = 'default', className = '', ...props }: ButtonProps) {
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100', // ✅ define ghost style
  };

  return (
    <button
      className={`px-4 py-2 rounded ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


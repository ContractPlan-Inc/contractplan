import * as React from 'react';

import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn('w-full rounded border px-3 py-2', className)}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-midnight text-white hover:bg-indigo-800',
        outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-100',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
        emerald: 'bg-emerald text-white hover:bg-emerald/90',
      },
      size: {
        default: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
        sm: 'h-8 px-3 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonVariants['variants']['variant']
  size?: keyof typeof buttonVariants['variants']['size']
}>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    )
  }
)
Button.displayName = 'Button'

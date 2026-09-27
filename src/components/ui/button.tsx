import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all duration-150 cursor-pointer select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-2 border-black bg-[var(--accent)] text-white shadow-[3px_3px_0px_0px_#2a1810] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#2a1810] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#2a1810]',
        secondary:
          'border-2 border-black bg-[var(--surface-warm)] text-black shadow-[3px_3px_0px_0px_#2a1810] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--surface)] hover:shadow-[5px_5px_0px_0px_#2a1810] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#2a1810]',
        outline:
          'border-2 border-black bg-[var(--surface)] text-black shadow-[3px_3px_0px_0px_#2a1810] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--surface-warm)] hover:shadow-[5px_5px_0px_0px_#2a1810] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#2a1810]',
        neutral:
          'border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_#2a1810] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#2a1810] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#2a1810]',
        ghost:
          'border-2 border-transparent text-black hover:border-black hover:bg-[var(--surface-warm)] hover:shadow-[2px_2px_0px_0px_#2a1810]',
        link: 'text-[var(--accent)] underline-offset-4 hover:underline font-bold',
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const alertVariants = cva(
  'relative w-full rounded-lg border-2 border-black p-4 text-sm font-medium shadow-[4px_4px_0px_0px_#2a1810]',
  {
    variants: {
      variant: {
        default: 'bg-[var(--surface-warm)] text-black',
        accent: 'bg-[var(--accent)] text-white',
        success: 'bg-[#b2e2b2] text-black',
        warning: 'bg-[#fed7aa] text-black',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function Alert({
  className,
  variant,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn('mb-1 font-bold leading-none tracking-tight font-[var(--font-display)]', className)}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <div
      className={cn('text-xs leading-relaxed opacity-90', className)}
      {...props}
    />
  );
}

import * as React from 'react';
import { cn } from '@/lib/utils';

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  repeat = 4,
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  repeat?: number;
}) {
  return (
    <div
      className={cn(
        'group flex overflow-hidden p-2 select-none border-y-2 border-black bg-[var(--surface-warm)] font-mono text-xs font-bold text-black',
        className
      )}
    >
      <div
        className={cn(
          'flex shrink-0 justify-around gap-6 min-w-full animate-marquee items-center',
          reverse && 'animate-marquee-reverse',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <React.Fragment key={i}>{children}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

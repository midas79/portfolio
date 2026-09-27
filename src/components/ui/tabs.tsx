'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within <Tabs>');
  }
  return context;
}

export function Tabs({
  value,
  defaultValue,
  onValueChange,
  children,
  className,
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [tab, setTab] = React.useState(defaultValue || '');
  const activeTab = value !== undefined ? value : tab;
  const changeTab = (val: string) => {
    if (value === undefined) setTab(val);
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ value: activeTab, onValueChange: changeTab }}>
      <div className={cn('w-full', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex flex-wrap items-center gap-2 rounded-lg border-2 border-black bg-[var(--surface-warm)] p-1.5 shadow-[3px_3px_0px_0px_#2a1810]',
        className
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { value: activeValue, onValueChange } = useTabs();
  const isActive = activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={() => onValueChange(value)}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md border-2 px-3 py-1.5 text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer select-none',
        isActive
          ? 'border-black bg-[var(--accent)] text-white shadow-[2px_2px_0px_0px_#2a1810] -translate-x-0.5 -translate-y-0.5'
          : 'border-transparent bg-transparent text-black hover:border-black hover:bg-[var(--surface)] hover:shadow-[2px_2px_0px_0px_#2a1810]',
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { value: activeValue } = useTabs();
  if (activeValue !== value) return null;
  return (
    <div role="tabpanel" className={cn('mt-4 focus-visible:outline-none', className)}>
      {children}
    </div>
  );
}

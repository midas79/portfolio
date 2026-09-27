'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      setTheme(stored);
      applyTheme(stored);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    if (t === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', t);
    }
  };

  const cycleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  };

  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-md border-2 border-black bg-[var(--surface-warm)] flex items-center justify-center shadow-[2px_2px_0px_0px_#2a1810]"
        aria-label="Toggle theme"
      >
        <Monitor size={16} className="text-black" />
      </button>
    );
  }

  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;
  const label = theme === 'light' ? 'Light mode' : theme === 'dark' ? 'Dark mode' : 'System mode';

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.12 }}
      onClick={cycleTheme}
      className="w-10 h-10 rounded-md border-2 border-black bg-[var(--surface-warm)] flex items-center justify-center shadow-[2px_2px_0px_0px_#2a1810] hover:bg-[var(--surface)] cursor-pointer"
      title={`Theme: ${label} (click to change)`}
      aria-label={`Switch theme, current: ${label}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.12 }}
        >
          <Icon size={16} className="text-black" style={{ color: 'var(--fg)' }} />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

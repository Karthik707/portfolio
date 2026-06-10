import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'brand' | 'accent';
}

const variants = {
  default:
    'border-slate-200 bg-slate-100 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300',
  brand:
    'border-brand-500/30 bg-brand-500/10 text-brand-700 dark:text-brand-300',
  accent:
    'border-accent-500/30 bg-accent-500/10 text-accent-600 dark:text-accent-400',
};

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

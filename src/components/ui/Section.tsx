import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: 'section' | 'div';
}

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 sm:py-24 lg:py-28', className)}>
      <div className={cn('container-px', containerClassName)}>{children}</div>
    </section>
  );
}

import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ButtonsWrapperProps {
  children: ReactNode;
  className?: string;
  gap?: number;
}

export const ButtonsWrapper: React.FC<ButtonsWrapperProps> = ({
  children,
  className = '',
  gap = 3,
}) => {
  return (
    <div
      style={{ '--custom-gap': `${gap * 0.25}rem` } as React.CSSProperties}
      className={cn(`h-auto flex flex-wrap items-center gap-(--custom-gap)`, className)}>
      {children}
    </div>
  );
};

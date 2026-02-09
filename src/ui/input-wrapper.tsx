import { cn } from '@/lib/utils';
import React from 'react';

export const InputWrapper = ({
  children,
  className = '',
  gap = 0.7,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
}) => {
  return (
    <div style={{ gap: `${gap}ex` }} className={cn("w-full h-max flex flex-col", className)}>
      {children}
    </div>
  );
};

InputWrapper.displayName = 'InputWrapper';

import React, { ReactNode } from 'react';

interface WrapperButtonsProps {
  children: ReactNode;
  className?: string;
  gap?: number;
}

export const WrapperButtons: React.FC<WrapperButtonsProps> = ({
  children,
  className = '',
  gap = 3,
}) => {
  return (
    <div
      style={{ '--custom-gap': `${gap * 0.25}rem` } as React.CSSProperties}
      className={`h-auto flex flex-wrap items-center gap-(--custom-gap) ${className}`}>
      {children}
    </div>
  );
};

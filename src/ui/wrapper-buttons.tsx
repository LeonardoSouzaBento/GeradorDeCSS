import React, { ReactNode } from 'react';

interface WrapperButtonsProps {
  children: ReactNode;
  className?: string;
}

export const WrapperButtons: React.FC<WrapperButtonsProps> = ({ children, className = '' }) => {
  return <div className={`flex flex-wrap items-center gap-4 ${className}`}>{children}</div>;
};

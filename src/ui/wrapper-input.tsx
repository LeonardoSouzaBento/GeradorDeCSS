import React from 'react';

export const WrapperInput = ({
  children,
  className = '',
  gap = 1,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number; 
}) => {
  return <div style={{gap: `${gap}ex`}} className={`w-full h-max flex flex-col ${className}`}>{children}</div>;
};

WrapperInput.displayName = 'WrapperInput';

import React from 'react';

export const WrapperInput = ({
  children,
  styles = '',
  gap = 1,
}: {
  children: React.ReactNode;
  styles?: string;
  gap?: number; 
}) => {
  return <div style={{gap: `${gap}ex`}} className={`w-full h-max flex flex-col ${styles}`}>{children}</div>;
};

WrapperInput.displayName = 'WrapperInput';

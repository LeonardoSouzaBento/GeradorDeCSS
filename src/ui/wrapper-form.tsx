import React from 'react';

export const WrapperForm = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`border rounded-lg p-5 pt-[1.5ex] bg-card ${className}`}>{children}</div>;
};

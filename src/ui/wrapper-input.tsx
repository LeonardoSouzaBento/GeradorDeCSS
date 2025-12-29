import React from 'react';

export const WrapperInput = ({
  children,
  styles = '',
}: {
  children: React.ReactNode;
  styles?: string;
}) => {
  return <div className={`w-full h-max flex flex-col gap-[1ex] ${styles}`}>{children}</div>;
};

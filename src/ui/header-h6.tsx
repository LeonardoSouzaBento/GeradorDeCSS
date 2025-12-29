import React from 'react';

const HeaderH6 = ({
  children,
  mb = true,
  className,
}: {
  children: React.ReactNode;
  mb?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`h-max max-w-max ${mb ? 'mb-[1ex]' : ''} flex justify-center items-center gap-[0.8ex] ${className}`}>
      {children}
    </div>
  );
};

export default HeaderH6;

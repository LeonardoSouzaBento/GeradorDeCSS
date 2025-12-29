import React from 'react';
import { Separator } from './separator';

interface HeaderH6Props {
  title: string;
  children?: React.ReactNode;
  mb?: boolean;
  className?: string;
  description?: string;
  separator?: boolean;
}

export const HeaderH6 = ({
  children,
  mb = true,
  className,
  description,
  separator = true,
  title,
}: HeaderH6Props) => {
  return (
    <div className={`${mb ? 'mb-[2ex]' : ''}`}>
      <div className={`h-max max-w-max flex justify-center items-center 
        gap-[0.8ex] [&>svg]:mb-[0.2ex] ${className}`}>
        {children}
        <h6>{title}</h6>
      </div>
      {description && <p className="text-muted-foreground text-sm">{description}</p>}
      {separator && <Separator className="mt-[0.5ex]" />}
    </div>
  );
};

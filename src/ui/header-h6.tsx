import React from 'react';
import { Separator } from './separator';

interface HeaderH6Props {
  children?: React.ReactNode;
  mb?: number;
  mbMeasurement?: string;
  className?: string;
  separator?: boolean;
}

const HeaderH6 = ({ children, mb = 2, mbMeasurement = 'ex', className, separator = false }: HeaderH6Props) => {
  return (
    <div className={`${className}`} style={{ marginBottom: mb > 0 ? `${mb}${mbMeasurement}` : '' }}>
      {children}
      {separator && <Separator className="mt-[0.5ex]" />}
    </div>
  );
};

HeaderH6.displayName = 'HeaderH6';

const H6Title = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`h-max max-w-max flex justify-center items-center 
        gap-[0.9ex] [&>svg]:mb-[0.2ex] [&>svg]:shrink-0 ${className}`}>
      {children}
    </div>
  );
};

H6Title.displayName = 'H6Title';

const H6Description = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`text-muted-foreground text-sm ${className ?? ''}`}>{children}</div>
  );
};

H6Description.displayName = 'H6Description';

export { HeaderH6, H6Title, H6Description };

import { cn } from '@/lib/utils';
import React from 'react';

export const FormWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('w-full border-b pb-4 rounded-xs bg-card', className)}>
      {children}
    </div>
  );
};

FormWrapper.displayName = 'FormWrapper';

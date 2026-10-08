import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  DivProps,
  DivRef,
  HeadProps,
  HeadRef,
  ParagraphProps,
  ParagraphRef,
} from '@/types/htmlTags';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noHeader?: boolean;
}

const Card = React.forwardRef<DivRef, CardProps>(
  ({ className, noHeader = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        `rounded-[2px] bg-card text-foreground flex flex-col
       transition-shadow duration-200 shadow-[0_3px_10px_-2px_rgba(0,0,0,0.07),0_1px_3px_-1px_rgba(0,0,0,0.04)]`,
        noHeader
          ? 'px-5 pb-5.5 pt-4 sm:px-6 sm:pb-6 sm:pt-5'
          : 'px-5 pb-5.5 pt-0 sm:px-6 sm:pb-6 sm:pt-0',
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<DivRef, DivProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        `flex flex-col space-y-1 pb-0 mb-2`,
        className,
      )}
      {...props}
    />
  );
});
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HeadRef, HeadProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'tracking-tight leading-snug pt-4 sm:pt-4.5 flex justify-start items-center gap-2 text-foreground',
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<ParagraphRef, ParagraphProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-muted-foreground text-sm -mt-0.5 pb-0.5', className)}
      {...props}>
      {children}
    </p>
  ),
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<DivRef, DivProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<DivRef, DivProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex justify-center items-center', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

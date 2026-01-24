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
        `rounded-lg bg-card text-card-foreground flex flex-col
       transition-shadow duration-300 shadow-md hover:shadow-lg border border-border/24`,
        noHeader ? 'p-6' : 'p-6 pt-0',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<DivRef, DivProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        `flex flex-col space-y-[0.8ex] pb-1.5 mb-4
           border-b border-border`,
        className
      )}
      {...props}
    />
  );
});
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HeadRef, HeadProps>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('tracking-tight leading-normal pt-[1cap]', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<ParagraphRef, ParagraphProps>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('text-muted-foreground text-sm -mt-cap-offset pb-0.5', className)} {...props}>
      {children}
    </p>
  )
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

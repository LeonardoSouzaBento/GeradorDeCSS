import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { DivProps, DivRef, ParagraphProps, ParagraphRef } from '@/types/htmlTags';

const alertVariants = cva(
  'relative w-full flex gap-2 rounded-xs border p-3 [&>svg~*]:pl-7 [&>svg>div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:shrink-0 transition-all duration-300  data-no-header:[&>div:has(svg)]:mt-1.25',
  {
    variants: {
      variant: {
        default: 'text-foreground',
        destructive:
          'bg-red-50/75 border-2 border-red-100 ring ring-destructive/66 text-red-700 [&>div:last-child]:text-red-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Alert = React.forwardRef<DivRef, DivProps & VariantProps<typeof alertVariants>>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  ),
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<ParagraphRef, ParagraphProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('mb-2 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<ParagraphRef, ParagraphProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed data-no-title:mt-px', className)}
      {...props}
    />
  ),
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };

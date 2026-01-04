import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { ButtonRef } from '@/types/htmlTags';

const buttonVariants = cva(
  'px-[2ex] tracking-wide inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary/90 text-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-2 border-primary/70 text-primary bg-transparent hover:bg-gray-50 shadow-xs/12',
        ghost: 'hover:bg-secondary/50 border text-primary bg-transparent',
        link: 'text-primary underline-offset-4 hover:underline',
        secondary: 'bg-primary-50 text-primary hover:bg-primary-100',
      },
      size: {
        sm: 'h-9 rounded-md px-4 small-button',
        default: `h-10 py-2 text-[0.95em]`,
        lg: 'h-11 rounded-md px-6 large-text text-[1.00em]',
        'icon-sm': 'size-8',
        icon: 'size-8.5',
        'icon-md': 'size-9.5',
        'icon-button': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  optionButton?: boolean;
  isSelected?: boolean;
  isDisable?: boolean;
  closeButton?: boolean;
}

const Button = React.forwardRef<ButtonRef, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      optionButton,
      isSelected,
      isDisable,
      closeButton,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          {
            'rounded-full': optionButton,
            'border-2 border-selected text-primary bg-primary-50/25 hover:bg-card':
              isSelected,
            'grayscale-100 opacity-50 cursor-not-allowed': isDisable,
            'rounded-full p-0!': closeButton,
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

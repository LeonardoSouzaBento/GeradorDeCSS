import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { ButtonRef } from '@/types/htmlTags';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  'w-auto tracking-wide inline-flex items-center justify-center gap-2 rounded-md ring-offset-background transition-colors disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 relative data-w-full:w-full data-round:rounded-full focus:outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary active:bg-primary-800 disabled:bg-neutral-300 disabled:text-neutral-500/80 hover:bg-primary/90 text-primary-foreground hover:bg-primary-600 focus:border-3 focus:border-selected/75',
        outline:
          'border-2 border-primary/88 text-primary bg-transparent hover:bg-gray-50 shadow-xs/12 disabled:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-500/75 hover:bg-primary-50 focus:outline-selected/70 focus:outline-2 active:bg-primary-100',
        ghost:
          'hover:bg-primary-50 border text-primary bg-transparent disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none hover:bg-primary-50 focus:outline-selected/70 focus:outline-3 focus:border-primary-400 active:bg-primary-100',
        secondary:
          'bg-primary-50 text-primary hover:bg-primary-100 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none hover:bg-primary-50/75 focus:outline-3 focus:outline-selected/75 active:bg-primary-100',
        link: 'text-primary underline-offset-4 hover:underline',
        transparent: 'bg-transparent text-primary hover:bg-primary-50',
        destructive:
          'bg-red-700 text-red-50 hover:bg-red-600 hover:bg-red-600 focus:outline-3 focus:outline-red-200 active:bg-red-800',
      },
      size: {
        sm: 'min-h-9 rounded-md small-button',
        default: `min-h-10 py-2`,
        lg: 'min-h-11 rounded-md large-text large-button',
        'icon-sm': 'size-8',
        icon: 'size-8.5',
        'icon-md': 'size-9.5',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  data-option?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  closeButton?: boolean;
}

const Button = React.forwardRef<ButtonRef, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size,
      asChild = false,
      data-option,
      isSelected,
      disabled,
      closeButton,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const paddingX = !size || ['default', 'lg', 'sm'].includes(size) ? 'px-[0.9em]' : '';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          paddingX,
          {
            'rounded-full': data-option,
            'border-2 border-selected text-primary bg-primary-50/25 hover:bg-card': isSelected,
            'rounded-full p-0! text-foreground': closeButton,
          },
          className,
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { ButtonRef } from '@/types/htmlTags';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  'w-auto tracking-wide inline-flex items-center justify-center gap-2 rounded-md ring-offset-background transition-colors disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 relative data-w-full:w-full data-round:rounded-full focus:outline-none data-option:rounded-full',
  {
    variants: {
      variant: {
        default:
          'bg-primary hover:bg-primary/90 text-primary-foreground disabled:bg-neutral-300 disabled:text-neutral-500/80 data-active:bg-primary-800 data-hover:bg-primary-600 data-focus:border-3 data-focus:border-selected/75',
        outline:
          'border-2 border-primary/88 text-primary bg-transparent hover:bg-gray-50 shadow-xs/12 disabled:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-500/75 data-hover:bg-primary-50 data-focus:outline-selected/70 data-focus:outline-2 data-active:bg-primary-100',
        ghost:
          'hover:bg-primary-50 border text-primary bg-transparent disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none data-hover:bg-primary-50 data-focus:outline-selected/70 data-focus:outline-3 data-focus:border-primary-400 data-active:bg-primary-100',
        transparent: 'bg-transparent text-primary hover:bg-primary-50',
        link: 'text-primary underline-offset-4 hover:underline',
        secondary:
          'bg-primary-50 text-primary hover:bg-primary-100 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none data-hover:bg-primary-50/75 data-focus:outline-3 data-focus:outline-selected/75 data-active:bg-primary-100',
        destructive:
          'bg-red-700 text-red-50 hover:bg-red-600 data-hover:bg-red-600 data-focus:outline-3 data-focus:outline-red-200 data-active:bg-red-800',
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

const getPx = (size: ButtonProps['size'], variant: ButtonProps['variant']) => {
  if (!size || ['default', 'lg', 'sm'].includes(size)) {
    switch (variant) {
      case 'default':
        return 'px-[0.9em]';
      case 'outline':
        return 'px-[0.808em]';
      case 'ghost':
        return 'px-[0.845em]';
    }
  }
  return '';
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
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
      isSelected,
      disabled,
      closeButton,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const paddingX = getPx(size, variant);
    const selectedCSS = isSelected ? 'border-2 border-selected text-primary bg-primary-50/25 hover:bg-card' : '';
    const closeButtonCSS = closeButton ? 'rounded-full p-0! text-foreground' : '';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          paddingX,
          selectedCSS,
          closeButtonCSS,
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

export const buttonStates = `
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  \`h-fit inline-flex items-center justify-center leading-none box-border gap-2 rounded-[3px] transition-all duration-200 disabled:pointer-events-none shrink-0 aria-invalid:ring-destructive/20 aria-invalid:border-destructive relative box-border tracking-wide cursor-pointer capitalize data-w-full:w-full data-option:rounded-full text-left outline-solid outline-0\`,
  {
    variants: {
      variant: {
        default: \`bg-primary-*stop-atual* text-primary-*stop-de-contraste* hover:bg-primary-*stop-anterior* active:bg-primary-*stop-superior* active:text-primary-50 
        disabled:bg-neutral-300 disabled:text-neutral-500/80 hover:bg-primary-700\`,

        outline: \`bg-transparent text-primary-*stop-atual* border-2 border-primary-*stop-atual* 
        active:bg-primary-100 disabled:bg-neutral-100 disabled:border-neutral-300 
        disabled:text-neutral-500/75 hover:bg-primary-50\`,

        ghost: \`bg-transparent text-primary-*stop-atual* border border-border/80 
        active:bg-primary-100 disabled:bg-neutral-100 disabled:text-neutral-400 
        disabled:border-none hover:bg-primary-50\`,

        secondary: \`bg-primary-50 text-primary-700 hover:bg-primary-50/66 
        saturate-120 active:bg-primary-100 active:text-primary-800 
        disabled:bg-neutral-100 disabled:text-neutral-400
      \`,

        link: \`text-blue-600 underline-offset-4 hover:underline\`,

        transparent: \`bg-transparent text-neutral-800 hover:bg-primary-50 px-[0.93em]
        disabled:bg-neutral-100 disabled:text-neutral-400\`,

        destructive: \`bg-red-700 text-red-50 hover:bg-red-600 
        active:bg-red-800 \`,
      },
      size: {
        sm: "min-h- text-button-sm",
        default: "min-h-",
        lg: "min-h- text-button-lg",
        icon: "size-",
        "icon-sm": "size-",
        "icon-md": "size-",
        "icon-lg": "size-",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type VariantWithState = keyof typeof buttonStatesStyles;
const buttonStates = {
  default: \`
    active:bg-*stop-superior*
    disabled:bg-neutral-300 disabled:text-neutral-500/80
    hover:bg-*stop-inferior*
    focus:border-3 focus:border-blue-300
  \`,
  outline: \`
    active:bg-primary-100
    disabled:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-500/75
    hover:bg-primary-50 text-primary-*stop-superior*
    focus:outline-3 focus:outline-blue-300
  \`,
  ghost: \`
    active:bg-primary-100
    disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none
    hover:bg-primary-50
    focus:outline-3 focus:outline-blue-300 focus:border-blue-600
  \`,
  secondary: \`
    active:bg-primary-200 active:text-primary-950
    disabled:bg-neutral-100 disabled:text-neutral-400
    hover:bg-primary-50
    focus:outline-3 focus:outline-blue-300
  \`,
  destructive: \`
  active: bg-red-700 text-red-50 
  hover:bg-red-600 
  focus:outline-3 focus:outline-red-200 
  active:bg-red-800
  \`,
};

function getStateClasses(variant: VariantWithState): string {
  return buttonStates[variant] || "";
}
`;

export const sizes = `size: {
  sm:,
  default:,
  lg:,
  icon:,
  'icon-sm':,
  'icon-md':,
  'icon-lg':,
},`;

export const buttonFirstPart = ``;

export const paddingsVars = `const paddings = {
  default: {
    sm:,
    default:,
    lg:,
  },
  outline: {
    sm:,
    default:,
    lg:,
  },
  ghost: {
    sm:,
    default:,
    lg:,
  },
};` ;

/* sem inclusões */
export const buttonLastPart = `
type OmitVariant = keyof typeof paddings | "destructive" | "secondary";
type OmitSize = keyof typeof paddings.default;
const paddingExptions = {
  variants: ["link", "transparent"],
  sizes: ["icon", "icon-sm", "icon-md", "icon-lg"],
};

const getPaddings = (variant: OmitVariant, size: OmitSize): string => {
  let padding = "";
  if (
    !paddingExptions.sizes.includes(size) &&
    !paddingExptions.variants.includes(variant)
  ) {
    padding =
      variant === "destructive" || variant === "secondary"
        ? paddings.default[size]
        : paddings[variant][size];
  }
  return padding;
};

interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  selected?: boolean;
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  selected = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const padding = getPaddings(variant as OmitVariant, size as OmitSize);
  const cssSelected = selected
    ? 'ring-2 ring-selected-300 bg-selected-50/50 hover:bg-light-bg text-selected-700 border-none'
    : '';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), padding, cssSelected, className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };`;
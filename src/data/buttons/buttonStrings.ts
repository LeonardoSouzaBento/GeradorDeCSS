

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
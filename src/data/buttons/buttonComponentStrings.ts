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

export const buttonLastPart = `
type OmitVariant = keyof typeof paddings;
type OmitSize = keyof typeof paddings.default;
const variants = Object.keys(paddings);
const sizes = Object.keys(paddings.default);

const getPaddings = (variant: OmitVariant, size: OmitSize): string => {
  let padding = '';
  if (variants.includes(variant) && sizes.includes(size)) {
    padding = paddings[variant][size];
  }
  return padding;
};

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
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
  const selectedButton = selected
    ? 'ring-2 ring-selected-300 bg-selected-50/50 hover:bg-light-bg text-selected-700 border-none'
    : '';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), padding, selectedButton, className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };`;
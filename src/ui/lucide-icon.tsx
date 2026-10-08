import {
  ALargeSmall,
  CaseSensitive,
  type LucideIcon as LucideIconType,
  type LucideProps,
} from "lucide-react";

type StrokeWidthValue = keyof typeof weights;
/* Ajuste depois */
const weights = {
  thin: 1.9,
  extralight: 2.05,
  light: 2.2,
  normal: 2.35,
  medium: 2.5,
  semibold: 2.65,
  bold: 2.8,
  extrabold: 2.95,
};

type SizeValue = keyof typeof iconSizes;

const iconSizes = {
  xxs: "0.889em",
  xs: "0.943em",
  sm: "1em",
  base: "1.061em",
  md: "1.125em",
  lg: "1.266em",
  xl: "1.424em",
  "2xl": "1.602em",
  h6: "1.125em",
  h5: "1.266em",
  h4: "1.424em",
  h3: "1.602em",
  h2: "1.802em",
};

const sizeScaleOrder: (keyof typeof iconSizes | "3xl" | "4xl")[] = [
  "xxs",
  "xs",
  "sm",
  "base",
  "md",
  "lg",
  "xl",
  "2xl",
  "h2",
  "3xl",
  "4xl",
];

const extraSizes: Record<string, string> = {
  ...iconSizes,
  "3xl": "2.027em",
  "4xl": "2.281em",
};

function getResolvedSize(IconComp: LucideIconType, size?: SizeValue | string): string {
  const isAaIcon = IconComp === CaseSensitive || IconComp === ALargeSmall;
  const baseKey = (size as SizeValue) || "base";

  if (!isAaIcon) {
    return iconSizes[baseKey] || size || iconSizes.base;
  }

  const normalizedKey =
    baseKey === "h6"
      ? "md"
      : baseKey === "h5"
        ? "lg"
        : baseKey === "h4"
          ? "xl"
          : baseKey === "h3"
            ? "2xl"
            : baseKey;

  const idx = sizeScaleOrder.indexOf(normalizedKey as any);
  if (idx !== -1) {
    const steppedKey = sizeScaleOrder[Math.min(idx + 1, sizeScaleOrder.length - 1)];
    return extraSizes[steppedKey];
  }

  return iconSizes[baseKey] || size || extraSizes.md;
}

function getResolvedStrokeWidth(
  IconComp: LucideIconType,
  strokeWidth?: StrokeWidthValue | string,
): number | string {
  const isAaIcon = IconComp === CaseSensitive || IconComp === ALargeSmall;
  const baseWeight =
    weights[strokeWidth as StrokeWidthValue] ||
    (strokeWidth ? Number(strokeWidth) : weights.normal);

  if (!isAaIcon || typeof baseWeight !== "number" || Number.isNaN(baseWeight)) {
    return baseWeight;
  }

  return Math.max(1.5, Number((baseWeight - 0.25).toFixed(2)));
}

interface IconProps extends Omit<LucideProps, "size" | "strokeWidth"> {
  Icon: LucideIconType;
  size?: SizeValue | string;
  strokeWidth?: StrokeWidthValue | string;
}

export const Icon = ({
  Icon,
  size,
  className,
  strokeWidth,
  fill,
}: IconProps) => {
  return (
    <div
      data-icon
      className="h-3 inline-flex justify-center items-center overflow-visible [&_svg]:shrink-0"
    >
      <Icon
        size={getResolvedSize(Icon, size)}
        strokeWidth={getResolvedStrokeWidth(Icon, strokeWidth)}
        className={className}
        fill={fill || "none"}
      />
    </div>
  );
};

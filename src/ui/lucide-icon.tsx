import type { LucideIcon as LucideIconType, LucideProps } from "lucide-react";

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
  extrabold: 2.95
}

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
        size={iconSizes[size as SizeValue] || size || iconSizes.base}
        strokeWidth={
          weights[strokeWidth as StrokeWidthValue] ||
          strokeWidth ||
          weights.normal
        }
        className={className}
        fill={fill || "none"}
      />
    </div>
  );
};

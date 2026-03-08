import { lucideIconWeights } from "@/data/buttons/variables";

const sizePrefixes = ["xxs", "xs", "sm", "base", "md", "lg", "xl", '"2xl"'];
const alternativePrefixes = ["h6", "h5", "h4", "h3"];

const LucideIconFirstPart = `import type { LucideIcon as LucideIconType, LucideProps } from 'lucide-react';

type StrokeWidthValue = keyof typeof weights;

*lucide-weights*

type SizeValue = keyof typeof iconSizes;
`;

const LucideIconSecondPart = `interface IconProps extends Omit<LucideProps, 'size' | 'strokeWidth'> {
  Icon: LucideIconType;
  size?: SizeValue | string;
  strokeWidth?: StrokeWidthValue | string;
}

export const Icon = ({ Icon, size, className, strokeWidth = "normal", fill }: IconProps) => {
  return (
    <div className="h-3 inline-flex justify-center items-center overflow-visible [&_svg]:shrink-0">
      <Icon
        size={iconSizes[size as SizeValue] || size || iconSizes.base}
        strokeWidth={weights[strokeWidth as StrokeWidthValue] || strokeWidth || weights.normal}
        className={className}
        fill={fill || 'none'}
      />
    </div>
  );
};
`;

const muiIconSecondPart = `interface IconProps {
  icon: string;
  size?: string;
  fill?: number;
  weight?: number;
  margin?: string;
  className?: string;
}
  
export const MuiIcon = ({
  icon,
  size,
  fill = false,
  weight = *value*,
  margin = '0',
  className,
}: IconProps) => {
 const fillValue = fill ? 1 : 0;

 return (
    <div className="h-3 inline-flex justify-center items-center overflow-visible">
      <span
        className={\`material-symbols-rounded \${className}\`}
        style={{
          fontVariationSettings: \`"FILL" \${fillValue}, "wght" \${weight}\`,
          fontSize: iconSizes[size as SizeValue] || size || iconSizes.base,
        }}>
        {icon}
      </span>
    </div>
  );
};`;

function generateLucideIconWeights(normalValue: number, step: number): string {
  const stepValue = step || 0.15;
  const normalIndex = lucideIconWeights.indexOf("normal");

  const entries = lucideIconWeights.map((weight, index) => {
    const value = normalValue + (index - normalIndex) * stepValue;

    return `  ${weight}: ${Number(value.toFixed(2))}`;
  });

  return `const weights = {\n${entries.join(",\n")}\n}`;
}

function generateFontSizes(sizesValues: string[]): string {
  const firstPart = sizePrefixes.map((item, index) => {
    return `${item}: "${sizesValues[index]}",\n`;
  });

  const altPrefixesLength = alternativePrefixes.length;
  const sizesValuesLength = sizesValues.length;

  const secondPart = alternativePrefixes.map((item, index) => {
    return `${item}: "${sizesValues[sizesValuesLength - (altPrefixesLength - index)]}",\n`;
  });

  return `${firstPart.join("")}${secondPart.join("").trimEnd()}`;
}

export const genIconComponent = (
  sizesValues: string[],
  strokeWidth: number,
  currentWeight: number,
  lucideIconWeightStep: number,
  returnOption?: string
): string => {
  /* variaveis em comum */
  const strWeight = currentWeight?.toString();
  const strStrokeWidth = strokeWidth.toString();

  const fontSizes = generateFontSizes(sizesValues);
  /* lucide icon */
  if (returnOption === "lucide icon" || !returnOption) {
    const firstPart = LucideIconFirstPart.replace(
      "*value*",
      strStrokeWidth
    ).replace(
      "*lucide-weights*",
      generateLucideIconWeights(strokeWidth, lucideIconWeightStep)
    );
    const secondPart = LucideIconSecondPart.replace("*value*", strStrokeWidth);
    return `${firstPart}\nconst iconSizes = {\n${fontSizes}\n};\n\n${secondPart}`;
  }
  /* material icon */
  const secondPart = muiIconSecondPart.replace("*value*", strWeight);
  return `const iconSizes = {\n${fontSizes}\n};\n\ntype SizeValue = keyof typeof iconSizes;\n${secondPart}`;
};

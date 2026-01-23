const sizePrefixes = ['xs', 'sm', 'md', 'lg', 'h6', 'h5', 'h4', 'h3'];
const alternativePrefixes = ['xl', '"2xl"', '"3xl"', '"4xl"'];

const LucideIconFirstPart = `import { LucideIcon } from 'lucide-react';

interface IconProps {
  LucideIcon: LucideIcon;
  size?: string;
  className?: string;
  strokeValue?: string | number;
  fill?: string;
}

/* Ajuste depois */
const weights = {
  thin: 2.25,
  light: 2.35,
  normal: *value*, // valor padrão
  semibold: 2.67,
  bold: 2.8,
  extrabold: 3,
};
`;

const LucideIconSecondPart = `export const Icon = ({ LucideIcon, size, className, strokeValue, fill }: IconProps) => {
  return (
    <div className="h-3 flex-center overflow-visible [&_svg]:shrink-0">
      <LucideIcon
        size={iconSizes[size as keyof typeof iconSizes] || size || '1em'}
        strokeWidth={weights[strokeValue as keyof typeof weights] || strokeValue || *value*}
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
  fill = 0,
  weight = *value*,
  margin = '0',
  className,
}: IconProps) => {
 return (
    <div className="h-3 flex-center overflow-visible">
      <span
        className={\`material-symbols-rounded \${className}\`}
        style={{
          fontVariationSettings: \`"FILL" \${fill}, "wght" \${weight}\`,
          fontSize: iconSizes[size as keyof typeof iconSizes] || size || '1em',
        }}>
        {icon}
      </span>
    </div>
  );
};`;

function generateFontSizes(sizesValues: string[]): string {
  const firstPart = sizePrefixes.map((item, index) => {
    return `${item}: "${sizesValues[index]}",\n`;
  });

  const altPrefixesLength = alternativePrefixes.length;
  const sizesValuesLength = sizesValues.length;

  const secondPart = alternativePrefixes.map((item, index) => {
    return `${item}: "${sizesValues[sizesValuesLength - (altPrefixesLength - index)]}",\n`;
  });

  return `${firstPart.join('')}${secondPart.join('').trimEnd()}`;
}

export const genIconComponent = (
  sizesValues: string[],
  strokeWidth: number,
  currentWeight?: number,
  returnOption?: string,
): string => {
  /* variaveis em comum */
  const strWeight = currentWeight?.toString();
  const strStrokeWidth = strokeWidth.toString();

  const fontSizes = generateFontSizes(sizesValues);
  /* lucide icon */
  if (returnOption === 'lucide icon' || !returnOption) {
    const firstPart = LucideIconFirstPart.replace('*value*', strStrokeWidth);
    const secondPart = LucideIconSecondPart.replace('*value*', strStrokeWidth);
    return `${firstPart}\nconst iconSizes = {\n${fontSizes}\n};\n\n${secondPart}`;
  }
  /* material icon */
  const secondPart = muiIconSecondPart.replace('*value*', strWeight);
  return `const iconSizes = {\n${fontSizes}\n};\n\n${secondPart}`;
};

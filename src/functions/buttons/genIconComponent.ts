const sizePrefixes = ['xs', 'sm', 'md', 'lg', 'h6', 'h5', 'h4', 'h3'];
const alternativePrefixes = ['xl', '2xl', '3xl', '4xl'];

const firstPart = `import { LucideIcon } from 'lucide-react';\n
interface IconProps {
  size?: string;
  Icon: LucideIcon;
  className?: string;
  strokeValue: string | number;
}\n`;

export const genIconComponent = (
  sizesValues: string[],
  strokeWidth: number,
  currentWeight?: number,
  returnOption?: string
): string => {
  /* variaveis em comum */
  const valuesFirstPart = sizePrefixes.map((item, index) => {
    return `${item}: "${sizesValues[index]}",\n`;
  });
  const altPrefixesLength = alternativePrefixes.length;
  const sizesValuesLength = sizesValues.length;

  const valuesSecondPart = alternativePrefixes.map((item, index) => {
    return `${item}: "${sizesValues[sizesValuesLength - (altPrefixesLength - index)]}",\n`;
  });
  const values = `${valuesFirstPart.join('')}${valuesSecondPart.join('').trimEnd()}`;
  /* lucide icon */
  if (returnOption === 'lucide icon' || !returnOption) {
    const weights = `const weights = {\nthin: ${strokeWidth - 0.4},\nlight: ${strokeWidth - 0.2},\n};`;

    const secondPart = `export const Icon = ({ size, LucideIcon, className, strokeValue }: IconProps) => {\nreturn (\n<LucideIcon size={iconSizes[size] || size || "1em"} strokeWidth={weights[strokeValue] || strokeValue || ${strokeWidth}} className={className || ""} />\n);};\n\n/*Exemplo de uso\n<LucideIcon size="sm" Icon={Play} />\nPasse para a prop size uma string key de iconSizes ou qualquer valor de altura CSS válido, 12px por exemplo\n\nPasse para a prop strokeValue uma string key de weights ou qualquer valor de peso numérico válido*/`;
    return `${firstPart}\nconst iconSizes = {\n${values}\n};\n\n${weights}\n\n${secondPart}`;
  }
  /* material icon */
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
  weight = ${currentWeight},
  margin = '0',
  className,
}: IconProps) => {
return (
  <span
    className={className || 'material-symbols-rounded'}
    style={{
      margin: margin,
      fontVariationSettings: \`"FILL" \${fill}, "wght" \${weight}\`,
      fontSize: iconSizes[size] || size || '1em',
    }}>
    {icon}
  </span>
);
};`;

  return `const iconSizes = {\n${values}\n};\n\n${muiIconSecondPart}`;
};

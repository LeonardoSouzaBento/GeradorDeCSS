const sizesPrefix = ['xs', 'sm', 'md', 'lg', 'h6', 'h5', 'h4', 'h3'];

const firstPart = `import { LucideIcon } from 'lucide-react';\n
interface IconProps {
  size?: string;
  Icon: LucideIcon;
  className?: string;
}\n`;

export const genIconComponent = (sizesValues: string[], strokeWidth: number): string => {
  const sizes = sizesPrefix;
  const values = sizes.map((item, index) => {
    return `${item}: ${sizesValues[index]},`;
  }).join('\n');
  const secondPart = `export const Icon = ({ size, Icon, className }: IconProps) => {\nreturn (\n<Icon size={iconSizes[size || 'md']} strokeWidth={${strokeWidth}} className={className} />\n);};\n\n/*Exemplo de uso\n<Icon size="sm" Icon={Play} />*/`;
  return `${firstPart}\nconst iconSizes = {\n${values}\n};\n\n${secondPart}`;
};

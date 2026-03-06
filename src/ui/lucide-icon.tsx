import type { LucideIcon as LucideIconType, LucideProps } from 'lucide-react';

type StrokeWidthValue = keyof typeof weights;
/* Ajuste depois */
const weights = {
  thin: 2.05,
  light: 2.20,
  normal: 2.35, // valor padrão
  semibold: 2.50,
  bold: 2.65,
  extrabold: 2.8,
};

type SizeValue = keyof typeof iconSizes;

const iconSizes = {
  xs: '0.937em',
  sm: '0.968em',
  base: '1em',
  md: '1.033em',
  lg: '1.067em',
  xl: '1.138em',
  '2xl': '1.215em',
  '3xl': '1.296em',
  h6: '1.067em',
  h5: '1.138em',
  h4: '1.215em',
  h3: '1.296em',
  h2: '1.383em',
  h1: '1.4757em',
};

interface IconProps extends Omit<LucideProps, 'size' | 'strokeWidth'> {
  Icon: LucideIconType;
  size?: SizeValue | string;
  strokeWidth?: StrokeWidthValue | string;
}

export const Icon = ({ Icon, size, className, strokeWidth, fill }: IconProps) => {
  return (
    <div data-icon className="h-3 inline-flex justify-center items-center overflow-visible [&_svg]:shrink-0">
      <Icon
        size={iconSizes[size as SizeValue] || size || '1.067em'}
        strokeWidth={weights[strokeWidth as StrokeWidthValue] || strokeWidth || weights.normal}
        className={className}
        fill={fill || 'none'}
      />
    </div>
  );
};

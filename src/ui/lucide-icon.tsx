import { cn } from '@/lib/utils';
import type { LucideIcon as LucideIconType, LucideProps } from 'lucide-react';

type SizeValue = keyof typeof iconSizes;
const iconSizes = {
  xs: '0.937em',
  sm: '0.968em',
  md: '1em',
  lg: '1.033em',
  xl: '1.067em',
  '2xl': '1.1385em',
  '3xl': '1.2148em',
};

type StrokeValue = keyof typeof weights;
const weights = {
  thin: 2.2,
  light: 2.5,
  regular: 2.6,
};

interface IconProps extends Omit<LucideProps, 'size' | 'strokeWidth'> {
  Icon: LucideIconType;
  size?: SizeValue | string;
  strokeValue?: StrokeValue | string;
}

export const Icon = ({ size, Icon, className, strokeValue, fill }: IconProps) => {
  return (
    <Icon
      size={iconSizes[size as SizeValue] || size || '1em'}
      strokeWidth={weights[strokeValue as StrokeValue] || strokeValue || 2.8}
      fill={fill || 'none'}
      className={cn(className)}
    />
  );
};

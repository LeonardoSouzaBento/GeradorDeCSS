import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconProps {
  size?: string;
  Icon: LucideIcon;
  className?: string;
  strokeValue?: string | number;
  data?: string;
}

const iconSizes = {
  xs: '0.937em',
  sm: '0.968em',
  md: '1em',
  lg: '1.033em',
  xl: '1.067em',
  '2xl': '1.1385em',
  '3xl': '1.2148em',
};

const weights = {
  thin: 2.2,
  light: 2.4,
  regular: 2.6,
};

export const Icon = ({ size, Icon, className, strokeValue }: IconProps) => {
  return (
    <Icon
      size={iconSizes[size || 'md']}
      strokeWidth={weights[strokeValue] || strokeValue || 2.8}
      className={cn(className)}
    />
  );
};

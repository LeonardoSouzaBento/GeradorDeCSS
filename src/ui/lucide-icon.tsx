import { LucideIcon } from 'lucide-react';

interface IconProps {
  size?: string;
  Icon: LucideIcon;
  className?: string;
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

export const Icon = ({ size, Icon, className }: IconProps) => {
  return <Icon size={iconSizes[size || 'md']} strokeWidth={2.4} className={className} />;
};

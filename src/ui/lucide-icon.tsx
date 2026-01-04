import { LucideIcon } from 'lucide-react';

interface IconProps {
  size?: string;
  Icon: LucideIcon;
}

const iconVariants = {
  xs: { strokeWidth: 2.7, size: '0.937em' },
  sm: { strokeWidth: 2.5, size: '0.968em' },
  md: { strokeWidth: 2.3, size: '1em' },
  lg: { strokeWidth: 2.1, size: '1.033em' },
  xl: { strokeWidth: 2.0, size: '1.067em' },
};

const Icon = ({ size, Icon }: IconProps) => {
  return <Icon {...iconVariants[size || 'md']} />;
};

export default Icon;

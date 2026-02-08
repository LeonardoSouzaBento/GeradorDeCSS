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
};
type SizeValue = keyof typeof iconSizes;

interface IconProps {
  icon: string;
  size?: string;
  fill?: boolean;
  weight?: number;
  margin?: string;
  className?: string;
}

export const MuiIcon = ({
  icon,
  size,
  fill = false,
  weight = 600,
  margin = '0',
  className,
}: IconProps) => {
  const fillValue = fill ? 1 : 0;
  return (
    <span
      className={className + ' material-symbols-rounded'}
      style={{
        margin: margin,
        fontVariationSettings: `"FILL" ${fillValue}, "wght" ${weight}`,
        fontSize: iconSizes[size as SizeValue] || size || '1em',
      }}>
      {icon}
    </span>
  );
};

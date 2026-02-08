import { ColorShade } from '@/hooks/useColorShades';

function genPalletVariables(
  shades: ColorShade[],
  colorName: string = 'primary',
  colorPrefix: boolean = true,
): string {
  const currentNickname = colorPrefix ? `--color-${colorName}-` : colorName + '-';

  const colors = shades
    .map((item) => {
      const step = item.stop;
      const color = item.hex;
      const comment = item.isBase ? ' /*Sua cor*/' : '';
      return `${currentNickname}${step}: ${color};${comment}\n`;
    })
    .join('');

  return `${colors}`;
}

interface Props {
  shades: ColorShade[];
  colorName: string;
  colorPrefix: boolean;
}

const ThematicColorVars = ({ shades, colorName, colorPrefix }: Props) => {
  return (
    <div>
      <pre>{genPalletVariables(shades, colorName, colorPrefix)}</pre>
    </div>
  );
};

export { ThematicColorVars };


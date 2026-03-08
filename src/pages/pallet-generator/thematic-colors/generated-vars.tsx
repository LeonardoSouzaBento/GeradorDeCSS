import { CopyButton } from '@/components/common';
import { ColorShade } from '@/hooks/useColorShades';
import { H6Title, HeaderH6, Icon } from '@/ui';
import { NotepadText } from 'lucide-react';

function genVariables(
  shades: ColorShade[],
  colorName: string = 'primary',
  colorPrefix: boolean = true,
): string {
  const currentNickname = colorPrefix ? `--color-${colorName}-` : colorName + '-';

  const colors = shades
    .map((item) => {
      const step = item.stop;
      const color = item.hex;
      const comment = item.isBase ? '/*Sua cor*/' : '';
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

export const GeneratedVars = ({ shades, colorName, colorPrefix }: Props) => {
  return (
    <div>
      <HeaderH6>
        <H6Title>
          <Icon Icon={NotepadText} />
          <h6>Saída</h6>
        </H6Title>
      </HeaderH6>
      <pre className='mb-4'>{genVariables(shades, colorName, colorPrefix)}</pre>
      <CopyButton toCopy={genVariables(shades, colorName, colorPrefix)} />
    </div>
  );
};
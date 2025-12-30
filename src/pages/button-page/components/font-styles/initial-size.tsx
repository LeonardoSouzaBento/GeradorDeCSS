import { Input, WrapperInput, HeaderH6, H6Title, H6Description } from '@/ui/index';

import { Ruler } from 'lucide-react';
import { iconXs } from '@/css/lucideIcons';

type Props = {
  styles: string;
  initialFontSize: number;
  setInitialFontSize: (fontSize: number) => void;
};

const InitialSize = ({ styles, initialFontSize, setInitialFontSize }: Props) => {
  return (
    <WrapperInput styles={styles}>
      <HeaderH6 mb={0}>
        <H6Title>
          <Ruler {...iconXs} />
          <h6>Tamanho inicial do parágrafo</h6>
        </H6Title>
        <H6Description>
          <p>Tamanho inicial da tag p em px</p>
        </H6Description>
      </HeaderH6>

      <Input
        type="number"
        value={initialFontSize}
        onChange={(e) => setInitialFontSize(Number(e.target.value))}
      />
    </WrapperInput>
  );
};

export default InitialSize;

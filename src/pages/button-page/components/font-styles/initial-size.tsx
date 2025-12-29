import { Input, WrapperInput, HeaderH6 } from '@/ui/index';

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
      <div className="mb-[1ex]">
        <HeaderH6
          mb={false}
          title="Tamanho inicial do parágrafo"
          description="Tamanho inicial da tag p em px">
          <Ruler {...iconXs} />
        </HeaderH6>
      </div>
      <Input
        type="number"
        value={initialFontSize}
        onChange={(e) => setInitialFontSize(Number(e.target.value))}
      />
    </WrapperInput>
  );
};

export default InitialSize;

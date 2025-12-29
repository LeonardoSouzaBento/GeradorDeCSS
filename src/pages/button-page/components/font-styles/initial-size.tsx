import { Input } from '@/ui/input';
import WrapperInput from '@/ui/wrapper-input';
import HeaderH6 from '@/ui/header-h6';
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
      <div>
        <HeaderH6 mb={false}>
          <Ruler {...iconXs} />
          <h6>Tamanho inicial</h6>
        </HeaderH6>
        <p className="text-muted-foreground -mt-px border-b mb-[1ex] pb-[0.5ex]">
          Tamanho inicial <strong>do botão normal em px</strong>
        </p>
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

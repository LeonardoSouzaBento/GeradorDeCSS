import { iconSm } from '@/css/lucideIcons';
import { StateSetter } from '@/data/typography/types';
import HeaderH6 from '@/ui/header-h6';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import WrapperInput from '@/ui/wrapper-input';
import { ALargeSmall } from 'lucide-react';

const inputs = ['Botão pequeno', 'Botão normal', 'Botão grande'];

interface Props {
  scaleFontSize: number[];
  setScaleFontSize: StateSetter<number[]>;
  styles?: string;
}

const RelativeSizes = ({ scaleFontSize, setScaleFontSize, styles }: Props) => {
  const handleScaleFontSizeChange = (index: number, value: number) => {
    const newScaleFontSize = [...scaleFontSize];
    newScaleFontSize[index] = value;
    setScaleFontSize(newScaleFontSize);
  };

  return (
    <div className={styles}>
      <HeaderH6 mb={false}>
        <ALargeSmall {...iconSm} />
        <h6>Tamanhos relativos</h6>
      </HeaderH6>
      <p className="text-muted-foreground pb-[0.5ex] mb-[1.9ex] border-b">
        Tamanhos na <strong>medida 'em'</strong> em relação ao tamanho da tag p
      </p>
      <div className={`flex flex-col gap-3`}>
        {inputs.map((item, index) => (
          <WrapperInput key={item}>
            <Label htmlFor={item}>{item}</Label>
            <Input
              id={item}
              type="number"
              value={scaleFontSize[index]}
              onChange={(e) => handleScaleFontSizeChange(index, Number(e.target.value))}
            />
          </WrapperInput>
        ))}
      </div>
    </div>
  );
};

export default RelativeSizes;

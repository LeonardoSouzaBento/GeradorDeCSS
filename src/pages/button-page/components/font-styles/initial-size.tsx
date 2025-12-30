import { Input, WrapperInput, HeaderH6, H6Title, H6Description } from '@/ui/index';

import { Ruler } from 'lucide-react';
import { iconXs } from '@/css/lucideIcons';
import { useEffect, useState } from 'react';
import { validateDecimalInput } from '@/utils/validateDecimalInput';

type Props = {
  styles: string;
  initialFontSize: number;
  setInitialFontSize: (fontSize: number) => void;
};

const InitialSize = ({ styles, initialFontSize, setInitialFontSize }: Props) => {
  const [localValue, setLocalValue] = useState<number>(initialFontSize);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    if (localValue <= 12 || localValue >= 24) {
      if (localValue < 1) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 8000);
      }
      return;
    }
    setInitialFontSize(localValue);
  }, [localValue]);

  return (
    <WrapperInput className={styles}>
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
        step={0.05}
        value={localValue}
        onChange={(e) => {
          const value = e.target.value;
          if (!validateDecimalInput(value)) return;
          // Remove zeros à esquerda, mas mantém o "0" se for seguido por "." (decimal)
          // ou se o valor for apenas "0"
          const normalizedValue = value.replace(/^0+(?=\d)/, '');
          setLocalValue(Number(normalizedValue));
        }}
      />
      {showAlert && <p className="text-destructive">Texto corridos devem ter entre 12 e 24px</p>}
    </WrapperInput>
  );
};

export default InitialSize;

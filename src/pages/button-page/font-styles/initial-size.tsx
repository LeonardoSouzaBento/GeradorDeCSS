import { Input, InputWrapper, HeaderH6, H6Title, H6Description } from '@/ui/index';

import { Ruler } from 'lucide-react';
import { Icon } from '@/ui/lucide-icon';
import { useEffect, useState } from 'react';
import { validateDecimalInput } from '@/utils/validateDecimalInput';

type Props = {
  initialFontSize: number;
  setInitialFontSize: (fontSize: number) => void;
};

const InitialSize = ({ initialFontSize, setInitialFontSize }: Props) => {
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
    <InputWrapper className='pb-5 border-b mb-3'>
      <HeaderH6 mb={0}>
        <H6Title>
          <Icon Icon={Ruler} />
          <h6>Tamanho inicial do parágrafo</h6>
        </H6Title>
        <H6Description>
          <p>
            Tamanho inicial da tag p em <strong>px</strong>
          </p>
        </H6Description>
      </HeaderH6>

      <Input
        className='max-w-54'
        type="number"
        step={0.5}
        min={12}
        max={24}
        value={localValue}
        onChange={(e) => {
          const value = e.target.value;
          if (!validateDecimalInput(value)) return;
          const normalizedValue = value.replace(/^0+(?=\d)/, '');
          setLocalValue(Number(normalizedValue));
        }}
      />
      {showAlert && <p className="text-destructive">Texto corridos devem ter entre 12 e 24px</p>}
    </InputWrapper>
  );
};

export default InitialSize;

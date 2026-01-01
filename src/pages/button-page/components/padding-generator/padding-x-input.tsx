import { iconXs } from '@/css/lucideIcons';
import { pxSuggestions } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { Button, H6Description, H6Title, HeaderH6, WrapperButtons, WrapperForm, WrapperInput } from '@/ui';
import { Input } from '@/ui/input';
import { RulerDimensionLine } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
  paddingX: string;
  setPaddingX: StateSetter<string>;
}

const PaddingXInput = ({ paddingX, setPaddingX }: Props) => {
  const [localPaddingX, setLocalPaddingX] = useState<string>(paddingX);

  useEffect(() => {
    if (localPaddingX.includes(',')) {
      setLocalPaddingX(localPaddingX.replace(',', '.'));
    }
  }, [localPaddingX]);

  useEffect(() => {
    if (Number(localPaddingX) >= 0.4 && Number(localPaddingX) <= 10) {
      setPaddingX(localPaddingX);
    }
  }, [localPaddingX]);

  return (
    <WrapperForm>
      <HeaderH6 mb={1}>
        <H6Title>
          <RulerDimensionLine {...iconXs} />
          <h6>Padding X</h6>
        </H6Title>
        <H6Description>
          <p>
            Padding horizontal na medida <strong>em</strong>
          </p>
        </H6Description>
      </HeaderH6>

      <WrapperInput>
        <Input
          type="text"
          inputMode="decimal"
          value={localPaddingX}
          onChange={(e) => {
            const value = e.target.value;
            if (!/^\d*[.,]?\d*$/.test(value)) return;
            setLocalPaddingX(value);
          }}
        />
      </WrapperInput>
      <WrapperButtons className="pt-4">
        {pxSuggestions.map((item) => (
          <Button
            variant="ghost"
            size="sm"
            optionButton
            isSelected={item === paddingX}
            key={item}
            onClick={() => setPaddingX(item)}
          >
            {item}
          </Button>
        ))}
      </WrapperButtons>
    </WrapperForm>
  );
};

export default PaddingXInput;

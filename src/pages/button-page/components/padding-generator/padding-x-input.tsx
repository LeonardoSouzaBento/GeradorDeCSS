import { iconXs } from '@/css/lucideIcons';
import { pxSuggestions } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import {
  Button,
  H6Description,
  H6Title,
  HeaderH6,
  WrapperButtons,
  WrapperForm,
  WrapperInput,
} from '@/ui';
import { Input } from '@/ui/input';
import { normalizeDecimalInput } from '@/utils/normalizeDecimalInput';
import { RulerDimensionLine } from 'lucide-react';
import { useState } from 'react';

interface Props {
  paddingX: number;
  setPaddingX: StateSetter<number>;
}

const PaddingXInput = ({ paddingX, setPaddingX }: Props) => {
  const [inputValue, setInputValue] = useState<string>(paddingX.toString());

  function handleChangePaddingX(value: string) {
    const stringValue = normalizeDecimalInput(value);
    const numericValue = Number(stringValue);
    if (!/^\d*[.,]?\d*$/.test(value)) return;
    setInputValue(stringValue);

    if (numericValue >= 0.4 && numericValue <= 10) {
      setPaddingX(numericValue);
    }
  }

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
          value={inputValue}
          onChange={(e) => {
            handleChangePaddingX(e.target.value);
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
            onClick={() => {
              setPaddingX(item);
              setInputValue((item).toString());
            }}>
            {item}
          </Button>
        ))}
      </WrapperButtons>
    </WrapperForm>
  );
};

export default PaddingXInput;

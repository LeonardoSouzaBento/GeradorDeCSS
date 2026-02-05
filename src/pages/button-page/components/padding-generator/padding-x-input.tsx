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
import { RulerDimensionLine } from 'lucide-react';
import { useState } from 'react';
import { InputAlert } from './input-alert';

interface Props {
  paddingX: number;
  setPaddingX: StateSetter<number>;
}

const PaddingXInput = ({ paddingX, setPaddingX }: Props) => {
  const [inputValue, setInputValue] = useState<string>(paddingX.toString());
  const [showAlert, setShowAlert] = useState(false);

  function handleChangePaddingX(value: string) {
    const stringValue = value.replace(',', '.');
    const numericValue = Number(stringValue);
    if (!/^\d*[.,]?\d*$/.test(value)) return;
    setInputValue(stringValue);

    if (numericValue >= 0.4 && numericValue <= 10) {
      setPaddingX(numericValue);
    } else {
      if (inputValue.replace('.', '').length >= 2) {
        setShowAlert(true);
      }
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
        <InputAlert
          message="Valor inválido! Escolha um valor entre 0.4 e 10."
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </WrapperInput>
      <WrapperButtons className="pt-4">
        {pxSuggestions.map((item) => (
          <Button
            variant="ghost"
            size="sm"
            data-option
            isSelected={item === paddingX}
            key={item}
            onClick={() => {
              setPaddingX(item);
              setInputValue(item.toString());
            }}>
            {item}
          </Button>
        ))}
      </WrapperButtons>
    </WrapperForm>
  );
};

export default PaddingXInput;

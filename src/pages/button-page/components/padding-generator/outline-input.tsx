import { iconXs } from '@/css/lucideIcons';
import { outlineSuggestions } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import {
  Button,
  H6Description,
  H6Title,
  HeaderH6,
  Input,
  WrapperButtons,
  WrapperForm,
  WrapperInput,
} from '@/ui';
import { normalizeDecimalInput } from '@/utils/normalizeDecimalInput';
import { validateDecimalInput } from '@/utils/validateDecimalInput';
import { LineSquiggle } from 'lucide-react';
import { useState } from 'react';

const OutlineInput = ({
  outlineValue,
  setOutlineValue,
}: {
  outlineValue: number;
  setOutlineValue: StateSetter<number>;
}) => {
  const [inputValue, setInputValue] = useState<string>(outlineValue.toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = normalizeDecimalInput(e.target.value);
    const numberValue = Number(value);
    if (!validateDecimalInput(value)) return;
    setInputValue(value);

    // Aceitar valores entre 1 e 10
    if (numberValue >= 1 && numberValue <= 10 && value !== '') {
      setOutlineValue(numberValue);
    } else if (value === '') {
      setOutlineValue(2);
    }
  };

  return (
    <WrapperForm className="sm:mb-0">
      <HeaderH6 mb={1.2} className="mb-[1ex]">
        <H6Title>
          <LineSquiggle {...iconXs} />
          <h6>Espessura da linha</h6>
        </H6Title>
        <H6Description>
          <p>Para botões com bordas</p>
        </H6Description>
      </HeaderH6>
      <WrapperInput>
        <Input
          type="text"
          pattern="[0-9]*"
          placeholder="Digite o valor"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
      </WrapperInput>
      <WrapperButtons className="pt-4">
        {outlineSuggestions.map((item) => (
          <Button
            variant="ghost"
            size="sm"
            optionButton
            isSelected={item === outlineValue}
            key={item}
            onClick={() => {
              setOutlineValue(item);
              setInputValue(item.toString());
            }}>
            {item}
          </Button>
        ))}
      </WrapperButtons>
    </WrapperForm>
  );
};

export default OutlineInput;

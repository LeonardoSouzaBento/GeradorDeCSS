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
import { validateDecimalInput } from '@/utils/validateDecimalInput';
import { LineSquiggle } from 'lucide-react';
import { useState } from 'react';
import { InputAlert } from './input-alert';

const OutlineInput = ({
  outlineValue,
  setOutlineValue,
}: {
  outlineValue: number;
  setOutlineValue: StateSetter<number>;
}) => {
  const [inputValue, setInputValue] = useState<string>(outlineValue.toString());
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(',', '.');
    const numberValue = Number(value);
    if (!validateDecimalInput(value)) return;
    setInputValue(value);

    // Aceitar valores entre 1 e 10
    if (numberValue >= 1 && numberValue <= 10 && value !== '') {
      setOutlineValue(numberValue);
    } else {
      if (value.replace('.', '').length >= 2) {
        setShowAlert(true);
      }
    }
    if (value === '') {
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
        <InputAlert
          message="Valor inválido! Escolha um valor entre 1 e 10."
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </WrapperInput>
      <WrapperButtons className="pt-4">
        {outlineSuggestions.map((item) => (
          <Button
            variant="ghost"
            size="sm"
            data-option
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

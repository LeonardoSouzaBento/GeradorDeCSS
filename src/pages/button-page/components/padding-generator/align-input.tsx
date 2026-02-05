import { iconXs } from '@/css/lucideIcons';
import { ButtonsData } from '@/data/buttons/variables';
import {
  Alert,
  AlertDescription,
  Button,
  H6Description,
  H6Title,
  HeaderH6,
  Input,
  WrapperButtons,
  WrapperForm,
  WrapperInput,
  Separator,
} from '@/ui/index';
import { AlignVerticalSpaceAround, Info } from 'lucide-react';
import React, { ComponentPropsWithoutRef, useState } from 'react';
import { InputAlert } from './input-alert';

interface AdjustmentInputsProps {
  className?: string;
  currentButtonsData: ButtonsData[];
  setCurrentButtonsData: React.Dispatch<React.SetStateAction<ButtonsData[]>>;
  initialFontSize: number;
}

const css = {
  wrapperButtonsAlert: `mt-4 gap-4 grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] xl:grid-cols-[1.5fr_1fr]`,
  containerButtons: `h-max flex flex-row justify-start flex-nowrap gap-[1.5ex] 
  sm:justify-between sm:flex-col sm:order-2`,
  wrapperButtons: `h-max min-w-max sm:w-full relative sm:justify-between flex-nowrap`,
};

const options = { positive: ['0.25', '0.5', '0.75'], negative: ['-0.25', '-0.5', '-0.75'] };

const AlignInput = ({
  currentButtonsData,
  setCurrentButtonsData,
  initialFontSize,
}: AdjustmentInputsProps) => {
  const [inputValue, setInputValue] = useState('0');
  const [showAlert, setShowAlert] = useState(false);

  function handleAdjustmentChange(value: string) {
    const normalizedValue = value.replace(',', '.');
    setInputValue(normalizedValue);
    const numberValue = Number(normalizedValue);
    if (numberValue >= -15 && numberValue <= 15) {
      const newValues = currentButtonsData.map((item) => ({
        ...item,
        adjustment: Number(((numberValue / 100) * initialFontSize * item.relativeSize).toFixed(4)),
      }));
      setCurrentButtonsData(newValues);
    } else {
      if (inputValue.replace('.', '').length >= 2) {
        setShowAlert(true);
      }
    }
  }

  return (
    <WrapperForm className="space-y-[1cap]">
      <HeaderH6 mb={1}>
        <H6Title>
          <AlignVerticalSpaceAround {...iconXs} />
          <h6>Alinhar botões</h6>
        </H6Title>
        <H6Description>
          <p>Diferença de padding para alinhar os botões</p>
        </H6Description>
      </HeaderH6>

      <WrapperInput>
        <Input
          id="pb"
          type="text"
          value={inputValue}
          onChange={(e) => {
            const value = e.target.value;
            if (!/^-?\d*[.,]?\d*$/.test(value)) return;
            const newValue = value.includes(',') ? value.replace(',', '.') : value;
            handleAdjustmentChange(newValue);
          }}
        />
        <InputAlert
          message="Valor inválido! Escolha um valor entre -15 e 15."
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </WrapperInput>

      <div className={css.wrapperButtonsAlert}>
        <div className={css.containerButtons}>
          <WrapperButtons className={css.wrapperButtons}>
            {options.negative.map((value) => (
              <DataOption
                key={value}
                value={value}
                onClick={() => handleAdjustmentChange(value)}
              />
            ))}
          </WrapperButtons>
          <Separator orientation="vertical" className="sm:hidden" />
          <WrapperButtons className="h-max w-full relative sm:justify-between flex-nowrap">
            {options.positive.map((value) => (
              <DataOption
                key={value}
                value={value}
                onClick={() => handleAdjustmentChange(value)}
              />
            ))}
          </WrapperButtons>
        </div>

        <Alert>
          <Info {...iconXs} className="shrink-0 mb-1" />
          <AlertDescription>
            <strong>Eleve</strong> o texto com valores positivos; <strong>abaixe</strong> com
            valores negativos
          </AlertDescription>
        </Alert>
      </div>
    </WrapperForm>
  );
};

export default AlignInput;

interface OptionButtonProps extends ComponentPropsWithoutRef<'button'> {
  value: string;
}

const DataOption = ({ value, ...props }: OptionButtonProps) => {
  return (
    <Button size="sm" variant="ghost" data-option className="px-[1.4ex]" {...props}>
      {value}
    </Button>
  );
};

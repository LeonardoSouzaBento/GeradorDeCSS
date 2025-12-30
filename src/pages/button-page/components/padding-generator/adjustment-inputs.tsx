import { iconXs } from '@/css/lucideIcons';
import { ButtonsData } from '@/data/buttons/variables';
import { H6Description, H6Title, HeaderH6, Input, Label, WrapperForm, WrapperInput } from '@/ui/index';
import { AlignVerticalSpaceAround } from 'lucide-react';
import React from 'react';

interface AdjustmentInputsProps {
  className?: string;
  currentButtonsData: ButtonsData[];
  setCurrentButtonsData: React.Dispatch<React.SetStateAction<ButtonsData[]>>;
}

const css = { wrapperInputs: `flex flex-col gap-[2ex] sm:flex-row` };

const AdjustmentInputs = ({ currentButtonsData, setCurrentButtonsData }: AdjustmentInputsProps) => {
  function handleAdjustmentChange(index: number, value: string) {
    const newButtonsData = [...currentButtonsData];
    newButtonsData[index].adjustment = value;
    setCurrentButtonsData(newButtonsData);
  }

  return (
    <WrapperForm className="space-y-[1cap]">
      <HeaderH6 mb={0}>
        <H6Title>
          <AlignVerticalSpaceAround {...iconXs} />
          <h6>Correções</h6>
        </H6Title>
        <H6Description>
          <p>Diferença de padding para alinhar os botões</p>
        </H6Description>
      </HeaderH6>

      <div className={css.wrapperInputs}>
        {currentButtonsData.map((item, index) => (
          <WrapperInput key={index}>
            <Label htmlFor={item.name}>{item.name}</Label>
            <Input
              id={item.name}
              type="text"
              value={item.adjustment}
              onChange={(e) => {
                handleAdjustmentChange(index, e.target.value);
              }}
            />
          </WrapperInput>
        ))}
      </div>
    </WrapperForm>
  );
};

export default AdjustmentInputs;

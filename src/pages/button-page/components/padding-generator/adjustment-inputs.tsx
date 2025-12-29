import { iconXs } from '@/css/lucideIcons';
import { ButtonsData } from '@/data/buttons/variables';
import { HeaderH6, Input, Label, WrapperForm, WrapperInput } from '@/ui/index';
import { AlignVerticalSpaceAround } from 'lucide-react';
import React from 'react';

interface AdjustmentInputsProps {
  className?: string;
  currentButtonsData: ButtonsData[];
  setCurrentButtonsData: React.Dispatch<React.SetStateAction<ButtonsData[]>>;
}

const css = { wrapperInputs: `flex flex-col gap-[2ex] sm:flex-row mt-[1.5ex]` };

const AdjustmentInputs = ({ currentButtonsData, setCurrentButtonsData }: AdjustmentInputsProps) => {
  function handleAdjustmentChange(index: number, value: string) {
    const newButtonsData = [...currentButtonsData];
    newButtonsData[index].adjustment = value;
    setCurrentButtonsData(newButtonsData);
  }

  return (
    <WrapperForm>
      <HeaderH6 title="Correções" description="Diferença de padding para alinhar os botões">
        <AlignVerticalSpaceAround {...iconXs} />
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

import { iconXs } from '@/css/lucideIcons';
import { ButtonsData } from '@/data/buttons/variables';
import { HeaderH6, Input, Label, WrapperInput, Separator, WrapperForm } from '@/ui/index';
import { ChartColumnDecreasing } from 'lucide-react';
import React from 'react';

interface SizeInputsProps {
  currentButtonsData: ButtonsData[];
  setCurrentButtonsData: React.Dispatch<React.SetStateAction<ButtonsData[]>>;
}

const css = { wrapperInputs: `flex flex-col gap-[2ex] sm:flex-row mt-[1.5ex]` };

const SizeInputs = ({ currentButtonsData, setCurrentButtonsData }: SizeInputsProps) => {
  function handleSizeChange(index: number, value: string) {
    const newButtonsData = [...currentButtonsData];
    newButtonsData[index].height = Number(value);
    setCurrentButtonsData(newButtonsData);
  }

  return (
    <WrapperForm className={`xl:mb-0`}>
      <HeaderH6 title="Alturas" description="Alturas dos botões em px">
        <ChartColumnDecreasing {...iconXs} />
      </HeaderH6>
      <div className={css.wrapperInputs}>
        {currentButtonsData.map((item, index) => (
          <WrapperInput key={index}>
            <Label htmlFor={item.name}>{item.name}</Label>
            <Input
              id={item.name}
              type="text"
              value={item.height}
              onChange={(e) => {
                handleSizeChange(index, e.target.value);
              }}
            />
          </WrapperInput>
        ))}
      </div>
    </WrapperForm>
  );
};

export default SizeInputs;

import { iconXs } from '@/css/lucideIcons';
import { ButtonsData } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { H6Description, H6Title, HeaderH6, Input, Label, WrapperForm, WrapperInput } from '@/ui/index';
import { ChartColumnDecreasing } from 'lucide-react';

interface SizeInputsProps {
  currentButtonsData: ButtonsData[];
  setCurrentButtonsData: StateSetter<ButtonsData[]>;
}

const css = { wrapperInputs: `flex flex-col gap-[2ex] sm:flex-row` };

const SizeInputs = ({ currentButtonsData, setCurrentButtonsData }: SizeInputsProps) => {
  function handleSizeChange(index: number, value: string) {
    const newButtonsData = [...currentButtonsData];
    newButtonsData[index].height = Number(value);
    setCurrentButtonsData(newButtonsData);
  }

  return (
    <WrapperForm>
      <HeaderH6 mb={0} className={`mb-[1cap]`}>
        <H6Title>
          <ChartColumnDecreasing {...iconXs} />
          <h6>Alturas</h6>
        </H6Title>
        <H6Description>
          <p>Alturas desejadas em <strong>px</strong></p>
        </H6Description>
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

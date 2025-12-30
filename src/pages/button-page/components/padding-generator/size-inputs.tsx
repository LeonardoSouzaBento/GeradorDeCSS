import { iconSm, iconXs } from '@/css/lucideIcons';
import { ButtonsData } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import {
  Button,
  H6Description,
  H6Title,
  HeaderH6,
  Input,
  Label,
  WrapperButtons,
  WrapperForm,
  WrapperInput,
} from '@/ui/index';
import { validateDecimalInput } from '@/utils/validateDecimalInput';
import { ChartColumnDecreasing, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SizeInputsProps {
  currentButtonsData: ButtonsData[];
  setCurrentButtonsData: StateSetter<ButtonsData[]>;
}

const css = { wrapperInputs: `flex flex-col gap-[2ex] sm:flex-row` };

const SizeInputs = ({ currentButtonsData, setCurrentButtonsData }: SizeInputsProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sizeScale, setSizeScale] = useState<string[]>(
    currentButtonsData.map((item) => item.height.toString())
  );
  const [canCheck, setCanCheck] = useState<number>(0);

  function handleSizeChange(index: number, value: string) {
    if (!validateDecimalInput(value)) return;
    setCurrentIndex(index);
    setSizeScale((prev) => {
      const newScale = [...prev];
      newScale[index] = value;
      return newScale;
    });
    setCanCheck((prev) => prev + 1);
  }

  function handleChangeScale() {
    const newScale = sizeScale.map((item) => Number(item + 4).toString());
    setSizeScale(newScale);
  }

  useEffect(() => {
    if (Number(sizeScale[currentIndex]) >= 20 && Number(sizeScale[currentIndex]) <= 72) {
      const newButtonsData = [...currentButtonsData];
      newButtonsData[currentIndex].height = Number(sizeScale[currentIndex]);
      setCurrentButtonsData(newButtonsData);
    }
  }, [canCheck]);

  return (
    <WrapperForm>
      <HeaderH6 mb={0} className={`mb-[1cap]`}>
        <H6Title>
          <ChartColumnDecreasing {...iconXs} />
          <h6>Alturas</h6>
        </H6Title>
        <H6Description>
          <p>
            Alturas desejadas em <strong>px</strong>
          </p>
        </H6Description>
      </HeaderH6>
      <div className={css.wrapperInputs}>
        {currentButtonsData.map((item, index) => (
          <WrapperInput key={index}>
            <Label htmlFor={item.name}>{item.name}</Label>
            <Input
              id={item.name}
              type="text"
              value={sizeScale[index]}
              onChange={(e) => {
                handleSizeChange(index, e.target.value);
              }}
            />
          </WrapperInput>
        ))}
      </div>
      <WrapperButtons className="py-[2ex]">
        <Button variant="ghost">
          <ChevronLeft {...iconSm} /> 
          Escala anterior
        </Button>
        <Button variant="ghost">
          Próxima escala 
          <ChevronRight {...iconSm} />
        </Button>
      </WrapperButtons>
    </WrapperForm>
  );
};

export default SizeInputs;

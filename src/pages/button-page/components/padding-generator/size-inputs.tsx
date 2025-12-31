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
import { buttonScales } from '@/data/buttons/variables';

interface SizeInputsProps {
  currentButtonsData: ButtonsData[];
  setCurrentButtonsData: StateSetter<ButtonsData[]>;
}

const css = { wrapperInputs: `flex flex-col gap-[2ex] min-[575px]:flex-row` };

const SizeInputs = ({ currentButtonsData, setCurrentButtonsData }: SizeInputsProps) => {
  const [sizeScale, setSizeScale] = useState<string[]>(
    currentButtonsData.map((item) => item.height.toString())
  );
  const [checkCount, setCheckCount] = useState<number>(0);
  const [stopOnChange, setStopOnChange] = useState<boolean>(false);

  function handleSizeChange(index: number, value: string) {
    if (stopOnChange || !validateDecimalInput(value)) return;
    setSizeScale((prev) => {
      const newScale = [...prev];
      newScale[index] = value;
      return newScale;
    });
    setCheckCount((prev) => prev + 1);
  }

  function handleChangeScale(action: 'previous' | 'next') {
    setStopOnChange(true);
    const stopValue = Number(sizeScale[1]) <= 28 || Number(sizeScale[1]) >= 72;
    if (stopValue) return;
    const middleValue = Number(sizeScale[1]) + (action === 'previous' ? -4 : 4);

    const newScale = sizeScale.map((item, index) => {
      return buttonScales[middleValue][index].toString();
    });
    setSizeScale(newScale);
    setCheckCount((prev) => prev + 1);
  }

  useEffect(() => {
    sizeScale.forEach((item, index) => {
      if (Number(item) >= 28 && Number(item) <= 72) {
        const newButtonsData = [...currentButtonsData];
        newButtonsData[index].height = Number(item);
        setCurrentButtonsData(newButtonsData);
      }
    });
  }, [checkCount]);

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
              onClick={() => setStopOnChange(false)}
              onChange={(e) => {
                handleSizeChange(index, e.target.value);
              }}
            />
          </WrapperInput>
        ))}
      </div>
      <WrapperButtons className="pt-[2ex]">
        <Button variant="ghost" onClick={() => handleChangeScale('previous')}>
          <ChevronLeft {...iconSm} />
          Escala anterior
        </Button>
        <Button variant="ghost" onClick={() => handleChangeScale('next')}>
          Próxima escala
          <ChevronRight {...iconSm} />
        </Button>
      </WrapperButtons>
    </WrapperForm>
  );
};

export default SizeInputs;

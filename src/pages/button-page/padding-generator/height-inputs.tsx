import { iconSm } from '@/css/lucideIcons';
import { buttonScales, ButtonsData } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import {
  Button,
  ButtonsWrapper,
  H6Description,
  H6Title,
  HeaderH6,
  Icon,
  Input,
  Label,
  FormWrapper,
  InputWrapper,
} from '@/ui/index';
import { validateDecimalInput } from '@/utils/validateDecimalInput';
import { ChartColumnDecreasing, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { InputAlert } from './input-alert';

interface HeightInputsProps {
  currentButtonsData: ButtonsData[];
  setCurrentButtonsData: StateSetter<ButtonsData[]>;
}

const css = { wrapperInputs: `flex flex-col gap-[2ex] min-[575px]:flex-row` };

const HeightInputs = ({ currentButtonsData, setCurrentButtonsData }: HeightInputsProps) => {
  const [heightScale, setHeightScale] = useState<string[]>(
    currentButtonsData.map((item) => item.height.toString()),
  );
  const [inputsValue, setInputsValue] = useState<string[]>(
    currentButtonsData.map((item) => item.height.toString()),
  );
  const [checkCount, setCheckCount] = useState<number>(0);
  const [stopOnChange, setStopOnChange] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  function handleHeightChange(index: number, value: string) {
    if (stopOnChange || !validateDecimalInput(value)) return;
    const normalizedValue = value.replace(',', '.');

    setInputsValue((prev) => {
      const newScale = [...prev];
      newScale[index] = normalizedValue;
      return newScale;
    });
    setCheckCount((prev) => prev + 1);
  }

  function handleChangeScale(action: 'previous' | 'next') {
    setStopOnChange(true);
    const stopValue =
      (action === 'previous' && Number(heightScale[0]) <= 32) ||
      (action === 'next' && Number(heightScale[2]) >= 72);
    if (stopValue) return;
    const middleValue = Number(heightScale[1]) + (action === 'previous' ? -4 : 4);

    const newScale = heightScale.map((_, index) => {
      return buttonScales[middleValue][index].toString();
    });
    setHeightScale(newScale);
    setCheckCount((prev) => prev + 1);
  }

  useEffect(() => {
    heightScale.forEach((item, index) => {
      if (Number(item) >= 32 && Number(item) <= 72) {
        const newButtonsData = [...currentButtonsData];
        newButtonsData[index].height = Number(item);
        setCurrentButtonsData(newButtonsData);
      }
    });
  }, [checkCount]);

  useEffect(() => {
    inputsValue.forEach((item, index) => {
      if (Number(item) >= 32 && Number(item) <= 72) {
        const newButtonsData = [...currentButtonsData];
        newButtonsData[index].height = Number(item);
        setCurrentButtonsData(newButtonsData);
      } else {
        if (inputsValue[index].replace('.', '').length >= 2) {
          setShowAlert(true);
        }
      }
    });
  }, [inputsValue]);

  return (
    <FormWrapper>
      <HeaderH6 mb={0} className={`mb-[1cap]`}>
        <H6Title>
          <Icon Icon={ChartColumnDecreasing} />
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
          <InputWrapper key={index}>
            <Label htmlFor={item.name}>{item.name}</Label>
            <Input
              id={item.name}
              type="text"
              value={inputsValue[index]}
              onClick={() => setStopOnChange(false)}
              onChange={(e) => {
                handleHeightChange(index, e.target.value);
              }}
            />
          </InputWrapper>
        ))}
      </div>
      <InputAlert
        message="Valor inválido! Escolha um valor entre 32 e 72."
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      <ButtonsWrapper className="pt-[2ex]">
        <Button variant="ghost" onClick={() => handleChangeScale('previous')}>
          <ChevronLeft {...iconSm} />
          Escala anterior
        </Button>
        <Button variant="ghost" onClick={() => handleChangeScale('next')}>
          Próxima escala
          <ChevronRight {...iconSm} />
        </Button>
      </ButtonsWrapper>
    </FormWrapper>
  );
};

export default HeightInputs;

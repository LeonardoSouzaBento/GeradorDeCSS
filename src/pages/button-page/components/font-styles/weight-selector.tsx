import { iconXs } from '@/css/lucideIcons';
import {
  Button,
  H6Description,
  H6Title,
  HeaderH6,
  Icon,
  Input,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  WrapperButtons,
  WrapperForm,
} from '@/ui/index';
import { validateDecimalInput } from '@/utils';
import { Maximize2, Minimize2, Package, Weight } from 'lucide-react';
import { useState } from 'react';
import { InputAlert } from '../padding-generator/input-alert';

type Props = {
  currentWeight: number;
  setCurrentWeight: (weight: number) => void;
  strokeWidth: number;
  setStrokeWidth: (strokeWidth: number) => void;
  color: string;
  iconSizes: string[];
  containerRef: React.RefObject<HTMLDivElement>;
};

const weights = [500, 600, 700];

const WeightSelector = ({
  currentWeight,
  setCurrentWeight,
  strokeWidth,
  setStrokeWidth,
  color,
  iconSizes,
  containerRef,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(strokeWidth.toString());
  const [expandIcon, setExpandIcon] = useState<boolean>(true);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  function scrollToBottom() {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }

  function handleChange(value: string) {
    setInputValue(value);
    if (!validateDecimalInput(value)) return;
    const numberValue = parseFloat(value);
    if (numberValue >= 1.5 && numberValue <= 5) {
      setStrokeWidth(numberValue);
    } else {
      if (value.replace('.', '').length >= 2) {
        setShowAlert(true);
      }
    }
    if (value === '') {
      setStrokeWidth(2);
    }
  }

  return (
    <div className={`w-full space-y-5 pb-px`}>
      <WrapperForm className={`w-full`}>
        <HeaderH6 mb={0.75}>
          <H6Title>
            <Weight {...iconXs} />
            <h6>Peso da fonte</h6>
          </H6Title>
        </HeaderH6>
        <WrapperButtons>
          {weights.map((weight) => (
            <Button
              key={weight}
              variant="ghost"
              optionButton
              isSelected={currentWeight === weight}
              onClick={() => {
                setCurrentWeight(weight);
              }}>
              {weight}
            </Button>
          ))}
        </WrapperButtons>
      </WrapperForm>

      <WrapperForm className={`w-full relative`}>
        <HeaderH6 mb={1}>
          <H6Title>
            <Weight {...iconXs} />
            <h6>Peso do ícone</h6>
          </H6Title>
          <H6Description>Harmonize o peso do ícone com o peso da fonte</H6Description>
        </HeaderH6>
        <Input
          type="text"
          value={inputValue}
          onClick={scrollToBottom}
          onChange={(e) => {
            const value = e.target.value.replace(',', '.');
            handleChange(value);
          }}
        />
        <WrapperButtons
          className={`mt-[1cap] border rounded-md px-[0.5ex] 
          py-[0.25ex] justify-between`}>
          {!expandIcon ? (
            <div className="flex gap-[0.5ex]">
              {iconSizes.slice(0, 5).map((size, index) => (
                <div
                  key={size}
                  className={`flex gap-[0.75ex] items-center
                  py-[0.5ex] px-[1ex] rounded-sm relative`}
                  style={{
                    color: color,
                    border: `${index === 2 ? `1.2px solid var(--color-input)` : 'none'}`,
                  }}>
                  <Package size={size} strokeWidth={strokeWidth} />
                  {index === 2 && <p className="absolute left-1 -top-1 text-lg">*</p>}
                  <p style={{ fontSize: size, fontWeight: currentWeight }}>Aa</p>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`flex gap-[0.6ex] items-center
                  py-[0.5ex] px-[1ex] rounded-md relative text-[calc(var(--text-h1-hero)*2)]`}
              style={{
                color: color,
              }}>
              <Package color={color} strokeWidth={strokeWidth} size={'0.97em'} />
              <p style={{ fontWeight: currentWeight }}>Aa</p>
            </div>
          )}
          <Tooltip delayDuration={450}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon-sm"
                className="text-primary"
                onClick={() => {
                  setExpandIcon(!expandIcon);
                }}>
                <Icon size="md" Icon={expandIcon ? Minimize2 : Maximize2} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{expandIcon ? 'Diminuir previsualização' : 'Aumentar previsualização'}</p>
            </TooltipContent>
          </Tooltip>
        </WrapperButtons>
        <InputAlert
          message="Valor inválido! Escolha um valor entre 1.5 e 5."
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </WrapperForm>
    </div>
  );
};

export default WeightSelector;

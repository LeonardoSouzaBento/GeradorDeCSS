import { iconXs } from '@/css/lucideIcons';
import {
  Alert,
  AlertDescription,
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
import { normalizeDecimalInput, validateDecimalInput } from '@/utils';
import { Info, Maximize2, Minimize2, Package, Weight } from 'lucide-react';
import { useState } from 'react';

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
  const [expandIcon, setExpandIcon] = useState<boolean>(false);

  function scrollToBottom() {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }

  function handleChange(value: string) {
    const normalized = normalizeDecimalInput(value);
    setInputValue(normalized);
    if (!validateDecimalInput(normalized)) return;
    const numberValue = parseFloat(normalized);
    if (numberValue >= 1.5 && numberValue <= 5) {
      setStrokeWidth(numberValue);
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
            handleChange(e.target.value);
          }}
        />
        <WrapperButtons className={`my-[1cap] border rounded-md px-[0.5ex] 
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
                  setTimeout(() => {
                    if (!expandIcon) {
                      scrollToBottom();
                    }
                  }, 200);
                }}>
                <Icon size="md" Icon={expandIcon ? Minimize2 : Maximize2} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Aumentar previsualização</p>
            </TooltipContent>
          </Tooltip>
        </WrapperButtons>

        <Alert className="mt-1">
          <Icon size="xs" Icon={Info} />
          <AlertDescription className="text-muted-foreground">
            <strong className="text-lg">*</strong> Tamanho padrão do ícone do botão normal, 1em do
            botão normal. Os demais tamanhos são mais opções de tamanhos que geramos, caso 1em não
            seja um valor conveniente.
          </AlertDescription>
        </Alert>
      </WrapperForm>
    </div>
  );
};

export default WeightSelector;

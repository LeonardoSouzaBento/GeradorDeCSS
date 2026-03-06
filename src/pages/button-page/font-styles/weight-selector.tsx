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
  ButtonsWrapper,
  FormWrapper,
} from "@/ui/index";
import { validateDecimalInput } from "@/utils";
import { Maximize2, Minimize2, Package, Weight } from "lucide-react";
import { useContext, useState } from "react";
import { InputAlert } from "../padding-generator/input-alert";
import { ButtonPageContext } from "@/contexts";

const weights = [500, 600, 700];

const WeightSelector = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const {
    currentWeight,
    setCurrentWeight,
    strokeWidth,
    setStrokeWidth,
    iconSizes,
    color,
  } = useContext(ButtonPageContext);
  const [inputValue, setInputValue] = useState<string>(strokeWidth.toString());
  const [expandIcon, setExpandIcon] = useState<boolean>(true);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  function scrollToBottom() {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }

  function handleChange(value: string) {
    setInputValue(value);
    if (!validateDecimalInput(value)) return;
    const numberValue = parseFloat(value);
    if (numberValue >= 1.5 && numberValue <= 5) {
      setStrokeWidth(numberValue);
    } else {
      if (value.replace(".", "").length >= 2) {
        setShowAlert(true);
      }
    }
    if (value === "") {
      setStrokeWidth(2);
    }
  }

  return (
    <div className={`w-full space-y-3 pb-px`}>
      <FormWrapper className={`w-full`}>
        <HeaderH6 mb={0.75}>
          <H6Title>
            <Icon Icon={Weight} className="mb-1" />
            <h6>Peso da fonte</h6>
          </H6Title>
        </HeaderH6>
        <ButtonsWrapper>
          {weights.map((weight) => (
            <Button
              key={weight}
              variant="ghost"
              data-option
              selected={currentWeight === weight}
              onClick={() => {
                setCurrentWeight(weight);
              }}
            >
              {weight}
            </Button>
          ))}
        </ButtonsWrapper>
      </FormWrapper>

      <FormWrapper className={`w-full relative`}>
        <HeaderH6 mb={1}>
          <H6Title>
            <Icon Icon={Weight} className="mb-1" />
            <h6>Peso do ícone</h6>
          </H6Title>
          <H6Description>
            Harmonize o peso do ícone com o peso da fonte
          </H6Description>
        </HeaderH6>
        <Input
          type="text"
          value={inputValue}
          onClick={scrollToBottom}
          onChange={(e) => {
            const value = e.target.value.replace(",", ".");
            handleChange(value);
          }}
        />
        <ButtonsWrapper
          className={`mt-[1cap] border rounded-xs px-[0.5ex] 
          py-[0.25ex] justify-between`}
        >
          {!expandIcon ? (
            <div className="flex gap-[0.5ex]">
              {iconSizes.slice(0, 5).map((size, index) => (
                <div
                  key={size}
                  className={`flex gap-[0.75ex] items-center
                  py-[0.5ex] px-[1ex] rounded-xs relative`}
                  style={{
                    color: color,
                    border: `${index === 2 ? `1.2px solid var(--color-input)` : "none"}`,
                  }}
                >
                  <Package size={size} strokeWidth={strokeWidth} />
                  {index === 2 && (
                    <p className="absolute left-1 -top-1 text-lg">*</p>
                  )}
                  <p style={{ fontSize: size, fontWeight: currentWeight }}>
                    Aa
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`flex gap-[0.6ex] items-center
                  py-[0.5ex] px-[1ex] rounded-xs relative text-[calc(var(--text-h1-hero)*2)]`}
              style={{
                color: color,
              }}
            >
              <Package
                color={color}
                strokeWidth={strokeWidth}
                size={"0.97em"}
              />
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
                }}
              >
                <Icon size="md" Icon={expandIcon ? Minimize2 : Maximize2} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {expandIcon
                  ? "Diminuir previsualização"
                  : "Aumentar previsualização"}
              </p>
            </TooltipContent>
          </Tooltip>
        </ButtonsWrapper>
        <InputAlert
          message="Valor inválido! Escolha um valor entre 1.5 e 5."
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </FormWrapper>
    </div>
  );
};

export default WeightSelector;

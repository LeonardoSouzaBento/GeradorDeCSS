import { ButtonPageContext } from "@/contexts";
import {
  Alert,
  AlertDescription,
  Button,
  ButtonsWrapper,
  FormWrapper,
  H6Description,
  H6Title,
  HeaderH6,
  Input,
  InputWrapper,
  Separator,
} from "@/ui/index";
import { Icon } from "@/ui/lucide-icon";
import { AlignVerticalSpaceAround, Info } from "lucide-react";
import { ComponentPropsWithoutRef, useContext, useState } from "react";
import { InputAlert } from "./input-alert";

const css = {
  ButtonsWrapperAlert: `mt-4 gap-4 grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] xl:grid-cols-[1.5fr_1fr]`,
  containerButtons: `h-max flex flex-row justify-start flex-nowrap gap-[1.5ex] 
  sm:justify-between sm:flex-col sm:order-2`,
  ButtonsWrapper: `h-max min-w-max sm:w-full relative sm:justify-between flex-nowrap`,
};

const options = {
  positive: ["0.25", "0.5", "0.75"],
  negative: ["-0.25", "-0.5", "-0.75"],
};

const AlignInput = () => {
  const { currentButtonsData, setCurrentButtonsData, initialFontSize } =
    useContext(ButtonPageContext);
  const [inputValue, setInputValue] = useState("0");
  const [showAlert, setShowAlert] = useState(false);

  function handleAdjustmentChange(value: string) {
    const normalizedValue = value.replace(",", ".");
    setInputValue(normalizedValue);
    const numberValue = Number(normalizedValue);
    if (numberValue >= -15 && numberValue <= 15) {
      const newValues = currentButtonsData.map((item) => ({
        ...item,
        adjustment: Number(
          ((numberValue / 100) * initialFontSize * item.relativeSize).toFixed(
            4,
          ),
        ),
      }));
      setCurrentButtonsData(newValues);
    } else {
      if (inputValue.replace(".", "").length >= 2) {
        setShowAlert(true);
      }
    }
  }

  return (
    <FormWrapper className="space-y-[1cap]">
      <HeaderH6 mb={1}>
        <H6Title>
          <Icon Icon={AlignVerticalSpaceAround} />
          <h6>Alinhar botões</h6>
        </H6Title>
        <H6Description>
          <p>Diferença de padding para alinhar os botões</p>
        </H6Description>
      </HeaderH6>

      <InputWrapper>
        <Input
          id="pb"
          type="text"
          value={inputValue}
          onChange={(e) => {
            const value = e.target.value;
            if (!/^-?\d*[.,]?\d*$/.test(value)) return;
            const newValue = value.includes(",")
              ? value.replace(",", ".")
              : value;
            handleAdjustmentChange(newValue);
          }}
        />
        <InputAlert
          message="Valor inválido! Escolha um valor entre -15 e 15."
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </InputWrapper>

      <div className={css.ButtonsWrapperAlert}>
        <div className={css.containerButtons}>
          <ButtonsWrapper className={css.ButtonsWrapper}>
            {options.negative.map((value) => (
              <DataOption
                key={value}
                value={value}
                onClick={() => handleAdjustmentChange(value)}
              />
            ))}
          </ButtonsWrapper>
          <Separator orientation="vertical" className="sm:hidden" />
          <ButtonsWrapper className="h-max w-full relative sm:justify-between flex-nowrap">
            {options.positive.map((value) => (
              <DataOption
                key={value}
                value={value}
                onClick={() => handleAdjustmentChange(value)}
              />
            ))}
          </ButtonsWrapper>
        </div>

        <Alert data-no-title>
          <Icon Icon={Info} className="shrink-0 mb-1" />
          <AlertDescription>
            <strong>Eleve</strong> o texto com valores positivos;{" "}
            <strong>abaixe</strong> com valores negativos
          </AlertDescription>
        </Alert>
      </div>
    </FormWrapper>
  );
};

export default AlignInput;

interface OptionButtonProps extends ComponentPropsWithoutRef<"button"> {
  value: string;
}

const DataOption = ({ value, ...props }: OptionButtonProps) => {
  return (
    <Button
      size="sm"
      variant="ghost"
      data-option
      className="px-[1.4ex]"
      {...props}
    >
      {value}
    </Button>
  );
};

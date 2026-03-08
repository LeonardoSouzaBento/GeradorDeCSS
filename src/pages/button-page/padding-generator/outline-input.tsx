import { outlineSuggestions } from "@/data/buttons/variables";
import { StateSetter } from "@/data/typography/types";
import {
  Button,
  H6Title,
  HeaderH6,
  Input,
  ButtonsWrapper,
  FormWrapper,
  InputWrapper,
  Icon,
  Label,
} from "@/ui";
import { validateDecimalInput } from "@/utils/validateDecimalInput";
import { LineSquiggle } from "lucide-react";
import { useState } from "react";
import { InputAlert } from "./input-alert";
import { ButtonPageContext, useButtonPageContext } from "@/contexts";

const OutlineInput = () => {
  const { outlineValue, setOutlineValue, ghostOutline, setGhostOutline } =
    useButtonPageContext();

  const [inputValues, setInputValues] = useState<string[]>([
    outlineValue.toString(),
    ghostOutline.toString(),
  ]);
  const [alerts, setAlerts] = useState<boolean[]>([false, false]);

  const buttons = [
    {
      name: "outline",
      value: outlineValue,
      setValue: setOutlineValue,
    },
    {
      name: "ghost",
      value: ghostOutline,
      setValue: setGhostOutline,
    },
  ];

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(",", ".");
    const numberValue = Number(value);

    if (!validateDecimalInput(value)) return;

    setInputValues((prev) => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });

    const newAlerts = [...alerts];

    // Aceitar valores entre 1 e 10
    if (numberValue >= 1 && numberValue <= 10 && value !== "") {
      buttons[index].setValue(numberValue);
      newAlerts[index] = false;
    } else {
      if (value.replace(".", "").length >= 2) {
        newAlerts[index] = true;
      }
    }
    setAlerts(newAlerts);

    if (value === "") {
      buttons[index].setValue(2);
    }
  };

  const handleSuggestionClick = (index: number, item: number) => {
    buttons[index].setValue(item);
    setInputValues((prev) => {
      const newValues = [...prev];
      newValues[index] = item.toString();
      return newValues;
    });
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <HeaderH6 mb={1}>
        <H6Title>
          <Icon Icon={LineSquiggle} />
          <h5>Espessura do contorno</h5>
        </H6Title>
      </HeaderH6>
      <div className="flex flex-col pre-sm:flex-row gap-4">
        {buttons.map((btn, index) => (
          <FormWrapper key={btn.name}>
            <InputWrapper>
              <Label>Botão {btn.name}</Label>
              <Input
                type="text"
                pattern="[0-9]*"
                placeholder="Digite o valor"
                value={inputValues[index]}
                onChange={(e) => handleInputChange(index, e)}
              />
              <InputAlert
                message="Valor inválido! Escolha um valor entre 1 e 10."
                showAlert={alerts[index]}
                setShowAlert={(show) =>
                  setAlerts((prev) => {
                    const newAlerts = [...prev];
                    newAlerts[index] =
                      typeof show === "function" ? show(prev[index]) : show;
                    return newAlerts;
                  })
                }
              />
            </InputWrapper>
            <ButtonsWrapper className="pt-4">
              {outlineSuggestions.map((item) => (
                <Button
                  variant="ghost"
                  size="sm"
                  data-option
                  selected={item === btn.value}
                  key={item}
                  onClick={() => handleSuggestionClick(index, item)}
                >
                  {item}
                </Button>
              ))}
            </ButtonsWrapper>
          </FormWrapper>
        ))}
      </div>
    </div>
  );
};

export default OutlineInput;

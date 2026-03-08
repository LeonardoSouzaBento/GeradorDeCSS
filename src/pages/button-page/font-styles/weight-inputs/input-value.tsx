import { H6Description, H6Title, HeaderH6, Icon, Input } from "@/ui";
import { validateDecimalInput } from "@/utils";
import { Weight } from "lucide-react";
import { useState } from "react";

export const InputValue = ({
  scrollToBottom,   
  setStrokeWidth,
  setShowAlert,
}: {
  scrollToBottom: () => void;
  setStrokeWidth: (value: number) => void;
  setShowAlert: (value: boolean) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  
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
    <>
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
    </>
  );
};

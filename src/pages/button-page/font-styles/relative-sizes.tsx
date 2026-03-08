import { useButtonPageContext } from "@/contexts";
import { ButtonsData, buttonsData } from "@/data/buttons/variables";
import { StateSetter } from "@/data/typography/types";
import {
  Alert,
  AlertDescription,
  Button,
  FormWrapper,
  H6Description,
  H6Title,
  HeaderH6,
  Input,
  InputWrapper,
  Label,
} from "@/ui/index";
import { Icon } from "@/ui/lucide-icon";
import { validateDecimalInput } from "@/utils/validateDecimalInput";
import { ALargeSmall, Info } from "lucide-react";
import { useState } from "react";

const inputs = ["Botão pequeno", "Botão normal", "Botão grande"];

interface Props {
  relativeSizeScale: string[];
  setRelativeSizeScale: StateSetter<string[]>;
  setCurrentButtonsData: StateSetter<ButtonsData[]>;
}

const dica = `Deixe o botão normal levemente menor que o corpo do texto do seu app/site.`;

const RelativeSizes = () => {
  const { relativeSizeScale, setRelativeSizeScale, setCurrentButtonsData } =
    useButtonPageContext();
  const [seeModal, setSeeModal] = useState<boolean>(false);

  const handleScaleFontSizeChange = (index: number, value: string) => {
    const normalized = value.replace(",", ".");
    if (!validateDecimalInput(normalized)) return;
    const newScale = [...relativeSizeScale];
    newScale[index] = normalized;
    setRelativeSizeScale(newScale);
    if (Number(normalized) >= 0.5 && Number(normalized) <= 1.5) {
      const newButtonsData = buttonsData.map((item, index) => ({
        ...item,
        relativeSize: Number(normalized),
      }));
      setCurrentButtonsData(newButtonsData);
    }
  };

  return (
    <FormWrapper className="space-y-[1cap]">
      <HeaderH6 mb={0}>
        <H6Title>
          <Icon Icon={ALargeSmall} size="md" strokeWidth="light" />
          <h6>Tamanhos relativos</h6>
        </H6Title>
        <H6Description>
          <p>
            Tamanhos na medida <strong>em</strong> (em relação ao tamanho do p
            normal)
          </p>
        </H6Description>
      </HeaderH6>
      <div
        className={`flex flex-col gap-3 sm:flex-row sm:justify-between max-w-lg`}
      >
        {inputs.map((item, index) => (
          <InputWrapper key={item}>
            <Label htmlFor={item}>{item}</Label>
            <Input
              id={item}
              type="text"
              pattern="[0-9]*"
              value={relativeSizeScale[index]}
              onChange={(e) => handleScaleFontSizeChange(index, e.target.value)}
            />
          </InputWrapper>
        ))}
      </div>
      <Alert className={`mt-5`}>
        <Icon Icon={Info} className="warn-icon" />
        <AlertDescription>
          Não se preocupe, definimos automaticamente pela{" "}
          <strong className="text-primary cursor-pointer font-semibold">
            escala de cresimento
          </strong>{" "}
          selecionada.
        </AlertDescription>
        <Button
          variant="link"
          size="sm"
          className="gap-[0.75ex]"
          onClick={() => setSeeModal(true)}
        >
          Saiba mais
        </Button>
      </Alert>
    </FormWrapper>
  );
};

export default RelativeSizes;

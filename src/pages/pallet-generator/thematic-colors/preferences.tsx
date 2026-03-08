import { ColorInput } from "@/components/common/color-input";
import { StateSetter } from "@/data/typography/types";
import {
  Button,
  H6Title,
  HeaderH6,
  Icon,
  Input,
  InputWrapper,
  Label,
} from "@/ui";
import { Menu, Settings2, X } from "lucide-react";
import { useState } from "react";

interface Props {
  color: string;
  setColor: StateSetter<string>;
  colorPrefix: boolean;
  setColorPrefix: StateSetter<boolean>;
  colorName: string;
  setColorName: StateSetter<string>;
}

export const Preferences = ({
  color,
  setColor,
  colorPrefix,
  setColorPrefix,
  colorName,
  setColorName,
}: Props) => {
  return (
    <div className="w-full pb-5 border-b lg:pb-0 lg:border-none">
      <HeaderH6 mb={1.5}>
        <H6Title>
          <Icon Icon={Settings2} />
          <h6>Preferências</h6>
        </H6Title>
      </HeaderH6>
      <div
        className={`grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] 
        lg:grid-cols-[0.6fr_0.4fr] gap-4`}
      >
        <BaseColorInput color={color} setColor={setColor} />

        <div className="grid grid-cols-1 gap-3 items-start sm:grid-cols-2 lg:grid-cols-1 sm:items-end">
          <ColorNameInput colorName={colorName} setColorName={setColorName} />
          <Button
            selected={colorPrefix}
            className="normal-case min-w-max justify-start w-full mt-1"
            variant="ghost"
            size="sm"
            onClick={() => setColorPrefix(!colorPrefix)}
          >
            <Input
              className="size-3.75 text-foreground bg-text-foreground"
              type="checkbox"
              checked={colorPrefix}
              onChange={() => setColorPrefix(!colorPrefix)}
            />
            Incluir "color"
          </Button>
        </div>
      </div>
    </div>
  );
};

const BaseColorInput = ({
  color,
  setColor,
}: {
  color: string;
  setColor: StateSetter<string>;
}) => {
  return (
    <InputWrapper className="lg:order-2 pb-5 border-b md:pb-0 md:border-none">
      <Label>Cor base</Label>
      <ColorInput
        color={color}
        setColor={setColor}
        cssWrapper="sm:grid-cols-2 lg:grid-cols-1 gap-4"
      />
    </InputWrapper>
  );
};

const colorNameOptions = ["primary", "secondary", "destructive", "theme"];

const ColorNameInput = ({
  colorName,
  setColorName,
}: {
  colorName: string;
  setColorName: StateSetter<string>;
}) => {
  const [setseeColorNameOptions, setSetseeColorNameOptions] = useState(false);

  return (
    <InputWrapper className="w-full relative">
      <Label>Nome da variavel</Label>
      <div className="w-full relative grid grid-cols-1 gap-4">
        <Input
          type="text"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
        />
        <Button
          onClick={() => setSetseeColorNameOptions(!setseeColorNameOptions)}
          size="icon-sm"
          className="absolute right-0.5 top-0.5"
          variant="transparent"
          data-black
        >
          <Icon Icon={Menu} size="lg" />
        </Button>
      </div>
      {setseeColorNameOptions && (
        <div
          className="absolute top-18 right-0 w-40 z-10
         p-2 rounded-sm shadow-lg bg-light-bg border"
        >
          <div className="border-b relative pb-2 mb-2">
            <p className="text-sm text-muted-foreground font-medium">Opções</p>
            <Button
              size="icon-sm"
              data-round
              className="absolute -top-1 -right-1"
              variant="secondary"
              onClick={() => setSetseeColorNameOptions(false)}
            >
              <Icon Icon={X} />
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            {colorNameOptions.map((option) => (
              <Button
                key={option}
                data-option
                variant="ghost"
                size="sm"
                className="justify-start"
                onClick={() => setColorName(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      )}
    </InputWrapper>
  );
};

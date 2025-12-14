import CopyButton from "@/components/inputs-card/copy-button";
import { scales } from "@/data/variables";
import { generateClamp } from "@/functions/generateClamp";
import { genScaledList } from "@/functions/genScaledList";
import { scaleSizesAndReturn } from "@/functions/scaleSizesAndReturn";
import { scaleSizesAndReturnCSS } from "@/functions/scaleSizesAndReturnCSS";
import { ClampValue, ScaledList, StateSetter } from "@/data/types";
import { useEffect, useState } from "react";
import Inputs from "./inputs-card/inputs";
import OptionsScale from "./inputs-card/optionsScale";
import ReturnOptions from "./inputs-card/return-options";

function deduceFontAt1536px(font640: number, font1280: number): number {
  const font1536 = 1.2 * (font1280 - font640) + font640;

  return Number(font1536.toFixed(2));
}

interface Props {
  output: string;
  secondOutput: string;
  setOutput: StateSetter<string>;
  setSecondOutput: StateSetter<string>;
  setClampValues: StateSetter<ClampValue>;
  disabled: boolean;
  setDisabled: StateSetter<boolean>;
  returnType: string;
  setReturnType: StateSetter<string>;
  canGenerate: number;
  setCanGenerate: StateSetter<number>;
}

const InputsCard = ({
  output,
  setOutput,
  secondOutput,
  setSecondOutput,
  returnType,
  setReturnType,
  setClampValues,
  disabled,
  setDisabled,
  canGenerate,
  setCanGenerate,
}: Props) => {
  const [newMinBase, setnewMinBase] = useState<number | null>(16.8);
  const [newMaxBase, setnewMaxBase] = useState<number | null>(17.2);
  const [scaleValue, setScaleValue] = useState<number>(scales[0].value);
  const [scaledList, setScaledList] = useState<ScaledList[]>([]);

  useEffect(() => {
    setDisabled(
      !newMinBase ||
        !newMaxBase ||
        newMinBase.toString().length < 2 ||
        newMaxBase.toString().length < 2
    );
  }, [newMinBase, newMaxBase]);

  /* Gerar Tailwind ou Css Puro*/
  useEffect(() => {
    if (canGenerate > 0 && !disabled) {
      const minEm = newMinBase / 16;
      const maxEm = newMaxBase / 16;
      const scaledList = genScaledList(minEm, maxEm, scaleValue);
      setScaledList(scaledList);

      if (returnType === "tw") {
        const fullCss = scaleSizesAndReturn(minEm, maxEm, scaleValue);
        setOutput(fullCss);
      } else {
        const fullCss = scaleSizesAndReturnCSS(minEm, maxEm, scaleValue);
        console.log(fullCss);

        setSecondOutput(fullCss);
      }
    }
  }, [canGenerate]);

  /* Gerar tabela de clamps em px para a prévia*/
  useEffect(() => {
    const valuesInPx = scaledList.map((item) => {
      return {
        tagName: item.tagName,
        minSize: item.minSize * 16,
        maxSize: deduceFontAt1536px(item.minSize, item.maxSize) * 16,
      };
    });
    const clampTable = valuesInPx.reduce((acc, item) => {
      acc[item.tagName] = generateClamp(item.minSize, item.maxSize);
      return acc;
    }, {} as ClampValue);

    setClampValues(clampTable);
  }, [scaledList]);

  return (
    <>
      <Inputs
        newMinBase={newMinBase}
        setnewMinBase={setnewMinBase}
        newMaxBase={newMaxBase}
        setnewMaxBase={setnewMaxBase}
        setCanGenerate={setCanGenerate}
      />

      <div
        className={`flex flex-col gap-3 pt-3 pb-5 sm:flex-row border-t 
        border-b border-input box-content`}
      >
        <OptionsScale
          scaleValue={scaleValue}
          setScaleValue={setScaleValue}
          setCanGenerate={setCanGenerate}
        />
        <ReturnOptions
          returnType={returnType}
          setReturnType={setReturnType}
          setCanGenerate={setCanGenerate}
        />
      </div>
      <CopyButton
        output={output}
        secondOutput={secondOutput}
        disabled={disabled}
        returnType={returnType}
      />
    </>
  );
};

export default InputsCard;

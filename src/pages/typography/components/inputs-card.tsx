import CopyButton from '@/pages/typography/components/inputs-card/copy-button';
import { scales } from '@/data/typography/variables';
import { generateClamp } from '@/functions/generateClamp';
import { genScaledList } from '@/functions/genScaledList';
import { returnTailwind } from '@/functions/returnTailwind';
import { returnCSS } from '@/functions/returnCSS';
import { ClampValue, ScaledList, StateSetter } from '@/data/typography/types';
import { useEffect, useState } from 'react';
import Inputs from './inputs-card/inputs';
import OptionsScale from './inputs-card/optionsScale';
import ReturnOptions from './inputs-card/return-options';
import { findKey } from '@/functions/findKey';

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
  rootFontSize: number;
}

const normalTextKey = findKey('--text-base');

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
  rootFontSize,
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
      const minEm = newMinBase / rootFontSize || 16;
      const maxEm = newMaxBase / rootFontSize || 16;
      const scaledList = genScaledList(minEm, maxEm, scaleValue);
      setScaledList(scaledList);

      if (returnType === 'tw') {
        const fullCss = returnTailwind(minEm, maxEm, scaleValue);
        setOutput(fullCss);
      } else {
        const fullCss = returnCSS(minEm, maxEm, scaleValue);
        setSecondOutput(fullCss);
      }
    }
  }, [canGenerate]);

  /* Gerar tabela de clamps em px para a prévia*/
  useEffect(() => {
    const valuesInPx = scaledList.map((item) => {
      if (item.tagName === normalTextKey) {
        return {
          tagName: item.tagName,
          minSize: newMinBase,
          maxSize: newMaxBase,
        };
      }
      return {
        tagName: item.tagName,
        minSize: item.minSize * (rootFontSize || 16),
        maxSize: deduceFontAt1536px(item.minSize, item.maxSize) * (rootFontSize || 16),
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
        border-b border-input box-content`}>
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

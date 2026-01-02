import { ButtonsData } from '@/data/buttons/variables';
import { WrapperButtons } from '@/ui/index';
import ResizableButton from './resizable-button';
import { StateSetter } from '@/data/typography/types';

interface ResultPreviewProps {
  currentButtonsData: ButtonsData[];
  initialFontSize: number;
  currentWeight: number;
  color: string;
  outlineValue: number;
  textContrastColor: string;
  paddingX: number;
  setPaddingX?: StateSetter<number>;
}

const ResultPreview = ({
  currentButtonsData,
  initialFontSize,
  currentWeight,
  color,
  outlineValue,
  textContrastColor,
  paddingX,
  setPaddingX,
}: ResultPreviewProps) => {
  return (
    <>
      <WrapperButtons className="items-start! font-target">
        {currentButtonsData.map((item, index) => {
          return (
            <ResizableButton
              key={index}
              name={item.name}
              height={Number(item.height)}
              relativeSize={item.relativeSize}
              initialFontSize={initialFontSize}
              currentWeight={currentWeight}
              color={color}
              textContrastColor={textContrastColor}
              paddingX={paddingX}
              adjustment={item.adjustment}
            />
          );
        })}
      </WrapperButtons>
      <WrapperButtons className="items-start! font-target">
        {currentButtonsData.map((item, index) => {
          const fontSize = item.relativeSize * initialFontSize;
          const pxInPx = fontSize * paddingX - (4 / 5) * outlineValue;
          const fixedPx = pxInPx / fontSize;

          return (
            <ResizableButton
              key={index}
              name={item.name}
              height={Number(item.height)}
              relativeSize={item.relativeSize}
              initialFontSize={initialFontSize}
              currentWeight={currentWeight}
              outlineValue={outlineValue}
              color={color}
              textContrastColor={textContrastColor}
              paddingX={fixedPx}
              adjustment={item.adjustment}
            />
          );
        })}
      </WrapperButtons>
    </>
  );
};

export default ResultPreview;

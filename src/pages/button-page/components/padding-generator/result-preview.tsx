import { ButtonsData, PaddingTypes } from '@/data/buttons/variables';
import { WrapperButtons } from '@/ui/index';
import { ThumbsUp } from 'lucide-react';
import ResizableButton from './resizable-button';
import { StateSetter } from '@/data/typography/types';

interface ResultPreviewProps {
  currentButtonsData: ButtonsData[];
  initialFontSize: number;
  currentWeight: number;
  color: string;
  color50: string;
  color1000: string;
  outlineValue: number;
  paddingX: number;
  iconButtonSizes: number[];
  iconSizes: string[];
  strokeWidth: number;
  setFillPaddings: StateSetter<PaddingTypes[]>;
  setOutlinePaddings: StateSetter<PaddingTypes[]>;
}

const ResultPreview = ({
  currentButtonsData,
  initialFontSize,
  currentWeight,
  color,
  outlineValue,
  paddingX,
  iconButtonSizes,
  color50,
  color1000,
  iconSizes,
  strokeWidth,
  setFillPaddings,
  setOutlinePaddings,
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
              color50={color50}
              paddingX={paddingX}
              adjustment={item.adjustment}
              strokeWidth={strokeWidth}
              index={index}
              setFillPaddings={setFillPaddings}
            />
          );
        })}
      </WrapperButtons>
      <WrapperButtons className="items-start! font-target">
        {currentButtonsData.map((item, index) => {
          const fontSize = item.relativeSize * initialFontSize;
          const pxInPx = fontSize * paddingX - (4 / 5) * outlineValue;
          const fixedPx = Number((pxInPx / fontSize).toFixed(5));

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
              paddingX={fixedPx}
              adjustment={item.adjustment}
              strokeWidth={strokeWidth}
              index={index}
              setOutlinePaddings={setOutlinePaddings}
            />
          );
        })}
      </WrapperButtons>
      <WrapperButtons>
        {iconButtonSizes.map((item, index) => {
          const id = `icon-${index}`;
          return (
            <div
              className="bg-primary-50 rounded-full flex items-center justify-center text-base"
              key={id}
              style={{ height: `${item}px`, width: `${item}px`, color: color1000 }}>
              {' '}
              <ThumbsUp size={iconSizes[index]} strokeWidth={strokeWidth} className="ml-px" />
            </div>
          );
        })}
      </WrapperButtons>
    </>
  );
};

export default ResultPreview;

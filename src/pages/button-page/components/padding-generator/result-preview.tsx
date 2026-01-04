import { ButtonsData, IconVariants } from '@/data/buttons/variables';
import { WrapperButtons } from '@/ui/index';
import { ThumbsUp } from 'lucide-react';
import ResizableButton from './resizable-button';

interface ResultPreviewProps {
  currentButtonsData: ButtonsData[];
  initialFontSize: number;
  currentWeight: number;
  color: string;
  color50: string;
  color1000: string;
  outlineValue: number;
  paddingX: number;
  iconHeightScale: number[];
  iconData: IconVariants;
}

const ResultPreview = ({
  currentButtonsData,
  initialFontSize,
  currentWeight,
  color,
  outlineValue,
  paddingX,
  iconHeightScale,
  color50,
  color1000,
  iconData,
}: ResultPreviewProps) => {
  const iconStyles = [iconData.xs, iconData.sm, iconData.md, iconData.lg];

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
              paddingX={fixedPx}
              adjustment={item.adjustment}
            />
          );
        })}
      </WrapperButtons>
      <WrapperButtons>
        {iconHeightScale.map((item, index) => {
          const id = `icon-${index}`;
          return (
            <div
              className="bg-primary-50 rounded-full flex items-center justify-center text-base"
              key={id}
              style={{ height: `${item}px`, width: `${item}px`, color: color1000 }}>
              {' '}
              <ThumbsUp {...iconStyles[index]} className="ml-px" />
            </div>
          );
        })}
      </WrapperButtons>
    </>
  );
};

export default ResultPreview;

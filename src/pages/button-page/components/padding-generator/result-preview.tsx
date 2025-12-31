import { ButtonsData } from '@/data/buttons/variables';
import { WrapperButtons } from '@/ui/index';
import ResizableButton from './resizable-button';

interface ResultPreviewProps {
  currentButtonsData: ButtonsData[];
  initialFontSize: number;
  currentWeight: number;
  color: string;
  lineThickness: string;
  textContrastColor: string;
  paddingX: string;
}

const ResultPreview = ({
  currentButtonsData,
  initialFontSize,
  currentWeight,
  color,
  lineThickness,
  textContrastColor,
  paddingX,
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
          const outlineValue = Number(lineThickness.replace('.', '')) || 1;
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
              paddingX={paddingX}
              adjustment={item.adjustment}
            />
          );
        })}
      </WrapperButtons>
    </>
  );
};

export default ResultPreview;

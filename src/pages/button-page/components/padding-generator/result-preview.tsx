import { iconMd } from '@/css/lucideIcons';
import { ButtonsData } from '@/data/buttons/variables';
import { Button, Separator, WrapperButtons } from '@/ui/index';
import { ArrowDown } from 'lucide-react';
import ResizableButton from './resizable-button';

interface ResultPreviewProps {
  currentButtonsData: ButtonsData[];
  initialFontSize: number;
  currentWeight: number;
  color: string;
  lineThickness: string;
  textContrastColor: string;
  paddingX: string;
  editingTypography?: boolean;
  typographyDivRef?: React.RefObject<HTMLDivElement>;
}

const ResultPreview = ({
  currentButtonsData,
  initialFontSize,
  currentWeight,
  color,
  lineThickness,
  textContrastColor,
  paddingX,
  editingTypography = false,
  typographyDivRef,
}: ResultPreviewProps) => {
  const handleScrollToTypography = () => {
    if (!typographyDivRef.current) return;

    const y = typographyDivRef.current.getBoundingClientRect().top + window.pageYOffset + 50;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

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
      {!editingTypography && (
        <div className='flex flex-col items-end gap-5'>
          <Separator/>
          <Button variant="outline" onClick={handleScrollToTypography}>
            Editar tipografia
            <ArrowDown {...iconMd} />
          </Button>
        </div>
      )}
    </>
  );
};

export default ResultPreview;

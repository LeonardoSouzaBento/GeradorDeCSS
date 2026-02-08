import { ButtonsData, PaddingTypes } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { Alert, AlertDescription, AlertTitle, H6Title, HeaderH6, Icon, FormWrapper } from '@/ui';
import { ButtonsWrapper } from '@/ui/index';
import { Info, ThumbsUp } from 'lucide-react';
import { ResizableButton } from './padding-generator';

interface PreviewProps {
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
  badContrast: boolean;
}

const Preview = ({
  badContrast,
  currentButtonsData,
  initialFontSize,
  currentWeight,
  color,
  outlineValue,
  paddingX,
  iconButtonSizes,
  color50,
  iconSizes,
  strokeWidth,
  setFillPaddings,
  setOutlinePaddings,
}: PreviewProps) => {
  return (
    <FormWrapper className={`flex flex-col gap-3 min-w-full`}>
      <HeaderH6 mb={0}>
        <H6Title>
          <h6>Prévia</h6>
        </H6Title>
      </HeaderH6>
      {badContrast && (
        <Alert data-warn>
          <Icon Icon={Info} />
          <AlertTitle data-warn>Alerta</AlertTitle>
          <AlertDescription data-warn>
            Cores claras demais são ruins para acessibilidade!
          </AlertDescription>
        </Alert>
      )}
      <div className="next-md:flex gap-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-[max-content_max-content] gap-4">
          <ButtonsWrapper className="items-start! font-target md:flex-col">
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
          </ButtonsWrapper>
          <ButtonsWrapper className="items-start! font-target md:flex-col">
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
          </ButtonsWrapper>
        </div>
        <ButtonsWrapper className="next-md:flex-col next-md:w-max lg:flex-row xl:flex-col">
          {iconButtonSizes.map((item, index) => {
            const id = `icon-${index}`;
            return (
              <div
                className="bg-primary-50 rounded-full flex items-center justify-center text-base"
                key={id}
                style={{ height: `${item}px`, width: `${item}px`, color: color }}>
                {' '}
                <ThumbsUp size={iconSizes[index]} strokeWidth={strokeWidth} className="ml-px" />
              </div>
            );
          })}
        </ButtonsWrapper>
      </div>
    </FormWrapper>
  );
};

export default Preview;

import FontSelector from '@/components/font-selector';
import Header from '@/components/header';
import { ButtonsData, buttonsData } from '@/data/buttons/variables';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { MousePointerClick } from 'lucide-react';
import { useEffect, useState } from 'react';
import ButtonPrev from './components/font-styles/buttons-prev';
import InitialSize from './components/font-styles/initial-size';
import RelativeSizes from './components/font-styles/relative-sizes';
import WeightSelector from './components/font-styles/weight-selector';
import AdjustmentInputs from './components/padding-generator/adjustment-inputs';
import ColorGenerator from './components/padding-generator/color-generator';
import ColorInput from './components/padding-generator/color-input';
import LineThickness from './components/padding-generator/line-thickness';
import SizeInputs from './components/padding-generator/size-inputs';
import ResizableButton from './components/padding-generator/resizable-button';
import { WrapperButtons } from '@/ui';

export const wrapperStyles = 'border rounded-lg p-5 pt-[1.5ex] bg-card';

export default function ButtonPage() {
  const [currentColor, setCurrentColor] = useState('#2B7FFF');
  const [currentWeight, setCurrentWeight] = useState(600);
  const [initialFontSize, setInitialFontSize] = useState(17);
  const [relativeSizeScale, setRelativeSizeScale] = useState<string[]>(['0.9', '0.95', '1']);
  const [currentButtonsData, setCurrentButtonsData] = useState<ButtonsData[]>(buttonsData);
  const [lineThickness, setLineThickness] = useState('2');

  // useEffect(() => {
  //   console.log(currentButtonsData);
  // }, [currentButtonsData]);

  return (
    <div>
      <Header
        page="buttons"
        title="Gerador de estilos para botões"
        description="Estilize seus botões mais rapidamente"
        icon={<MousePointerClick />}
      />
      <main className={`main-wrapper space-y-6 mb-8`}>
        <Card className={`max-h-max`}>
          <CardHeader>
            <CardTitle>Tipografia do botão</CardTitle>
          </CardHeader>
          <CardContent className={`flex flex-col gap-5`}>
            <div className="space-y-5 xl:grid xl:grid-cols-2 xl:gap-5 xl:space-y-0">
              <FontSelector page="button-page" />
              <div className="space-y-5">
                <InitialSize
                  styles={wrapperStyles}
                  initialFontSize={initialFontSize}
                  setInitialFontSize={setInitialFontSize}
                />
                <WeightSelector
                  styles={wrapperStyles}
                  currentWeight={currentWeight}
                  setCurrentWeight={setCurrentWeight}
                />
              </div>
            </div>

            <div className="space-y-5 xl:grid xl:grid-cols-2 xl:gap-5">
              <RelativeSizes
                relativeSizeScale={relativeSizeScale}
                setRelativeSizeScale={setRelativeSizeScale}
                setCurrentButtonsData={setCurrentButtonsData}
              />
              <div className="space-y-5">
                <ButtonPrev
                  currentWeight={currentWeight}
                  initialFontSize={initialFontSize}
                  relativeSizeScale={relativeSizeScale}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tamanhos e estilos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-5 xl:grid xl:grid-cols-2 xl:gap-5">
              <SizeInputs
                currentButtonsData={currentButtonsData}
                setCurrentButtonsData={setCurrentButtonsData}
              />
              <AdjustmentInputs
                currentButtonsData={currentButtonsData}
                setCurrentButtonsData={setCurrentButtonsData}
              />
            </div>
            <div className="space-y-5 xl:grid xl:grid-cols-2 xl:gap-5">
              <LineThickness lineThickness={lineThickness} setLineThickness={setLineThickness} />
              <ColorInput currentColor={currentColor} setCurrentColor={setCurrentColor} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prévia do resultado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <WrapperButtons className='items-start!'>
              {currentButtonsData.map((item, index) => {
                const adjustment = Number(item.adjustment.replace('.', ''));
                return (
                  <ResizableButton
                    key={index}
                    name={item.name}
                    height={item.height}
                    adjustment={adjustment}
                    relativeSize={item.relativeSize}
                    initialFontSize={initialFontSize}
                    currentWeight={currentWeight}
                  />
                );
              })}
            </WrapperButtons>
            <WrapperButtons>
              {currentButtonsData.map((item, index) => {
                const adjustment = Number(item.adjustment.replace('.', ''));
                const outlineValue = Number(lineThickness.replace('.', '')) || 1;
                return (
                  <ResizableButton
                    key={index}
                    name={item.name}
                    height={item.height}
                    adjustment={adjustment}
                    relativeSize={item.relativeSize}
                    initialFontSize={initialFontSize}
                    currentWeight={currentWeight}
                    outlineValue={outlineValue}
                  />
                );
              })}
            </WrapperButtons>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cores recomendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <ColorGenerator baseColor={currentColor} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

import FontSelector from '@/components/font-selector';
import Header from '@/components/header';
import { ButtonsData, buttonsData } from '@/data/buttons/variables';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { MousePointerClick } from 'lucide-react';
import { useState } from 'react';
import FirstPrev from './components/font-styles/first-prev';
import InitialSize from './components/font-styles/initial-size';
import RelativeSizes from './components/font-styles/relative-sizes';
import WeightSelector from './components/font-styles/weight-selector';
import AdjustmentInputs from './components/padding-generator/adjustment-inputs';
import ColorGenerator from './components/padding-generator/color-generator';
import ColorInput from './components/padding-generator/color-input';
import LineThickness from './components/padding-generator/line-thickness';
import ResultPreview from './components/padding-generator/result-preview';
import SizeInputs from './components/padding-generator/size-inputs';
import { HeaderH6, WrapperForm } from '@/ui';

export const wrapperStyles = 'border rounded-lg p-5 pt-[1.5ex] bg-card';

export default function ButtonPage() {
  const [color, setColor] = useState('#0b5bcb');
  const [bgColor, setBgColor] = useState<string>('');
  const [currentWeight, setCurrentWeight] = useState(600);
  const [initialFontSize, setInitialFontSize] = useState(17);
  const [relativeSizeScale, setRelativeSizeScale] = useState<string[]>(['0.9', '0.95', '1']);
  const [currentButtonsData, setCurrentButtonsData] = useState<ButtonsData[]>(buttonsData);
  const [lineThickness, setLineThickness] = useState('2');

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
                <FirstPrev>
                  <ResultPreview
                    currentButtonsData={currentButtonsData}
                    initialFontSize={initialFontSize}
                    currentWeight={currentWeight}
                    color={color}
                    lineThickness={lineThickness}
                  />
                </FirstPrev>
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
            <div className="space-y-5 xl:grid xl:grid-cols-[1fr_1fr_2fr] xl:gap-5">
              <LineThickness lineThickness={lineThickness} setLineThickness={setLineThickness} />
              <ColorInput color={color} setColor={setColor} />
              <WrapperForm className={`flex flex-col gap-3`}>
                <HeaderH6 title='Prévia' mb={false} separator={false}/>
                <ResultPreview
                  currentButtonsData={currentButtonsData}
                  initialFontSize={initialFontSize}
                  currentWeight={currentWeight}
                  color={color}
                  lineThickness={lineThickness}
                />
              </WrapperForm>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CSS de altura</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cores recomendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <ColorGenerator baseColor={color} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

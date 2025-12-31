import { FontSelector, Header } from '@/components/index';
import { ButtonsData, buttonsData, NavOptions } from '@/data/buttons/variables';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  H6Title,
  HeaderH6,
  WrapperForm,
} from '@/ui/index';
import { MousePointerClick } from 'lucide-react';
import { useRef, useState } from 'react';
import ColorGenerator from './components/color-palette/color-generator';
import { InitialSize, RelativeSizes, WeightSelector } from './components/font-styles/index';
import Nav from './components/nav';
import {
  AdjustmentInputs,
  ColorInput,
  LineThickness,
  PaddingXInput,
  ResultPreview,
  SizeInputs,
} from './components/padding-generator/index';

export const wrapperStyles = 'border rounded-lg p-5 pt-[1.5ex] bg-card';

export default function ButtonPage() {
  const [color, setColor] = useState('#05318a');
  const [textContrastColor, setTextContrastColor] = useState<string>('');
  const [currentWeight, setCurrentWeight] = useState(600);
  const [initialFontSize, setInitialFontSize] = useState(17);
  const [relativeSizeScale, setRelativeSizeScale] = useState<string[]>(['0.9', '0.95', '1']);
  const [currentButtonsData, setCurrentButtonsData] = useState<ButtonsData[]>(buttonsData);
  const [lineThickness, setLineThickness] = useState('2');
  const [paddingX, setPaddingX] = useState('0.85');
  const [navOptions, setNavOptions] = useState<NavOptions>('Alturas');

  return (
    <div>
      <Header
        page="buttons"
        title="Gerador de estilos para botões"
        description="Estilize seus botões mais rapidamente"
        icon={<MousePointerClick />}
      />
      <main className={`space-y-6 mb-8 px-3 min-[840px]:px-6 max-w-5xl mx-auto xl:max-w-none`}>
        <div className="xl:grid xl:grid-cols-[2fr_1fr] xl:gap-5">
          <Card noHeader className="md:flex md:gap-5">
            <Nav setNavOption={setNavOptions} navOption={navOptions} />
            <CardContent className={`flex flex-col gap-5 items-start`}>
              {navOptions === 'Alturas' && (
                <SizeInputs
                  currentButtonsData={currentButtonsData}
                  setCurrentButtonsData={setCurrentButtonsData}
                />
              )}
              {navOptions === 'Outline' && (
                <LineThickness lineThickness={lineThickness} setLineThickness={setLineThickness} />
              )}
              {navOptions === 'Cor' && <ColorInput color={color} setColor={setColor} />}
              {navOptions === 'Alinhamento' && (
                <AdjustmentInputs
                  initialFontSize={initialFontSize}
                  currentButtonsData={currentButtonsData}
                  setCurrentButtonsData={setCurrentButtonsData}
                />
              )}
              {navOptions === 'Padding X' && (
                <PaddingXInput paddingX={paddingX} setPaddingX={setPaddingX} />
              )}
              {navOptions === 'Fonte' && <FontSelector page="button-page" />}
              {navOptions === 'Font-size base' && (
                <InitialSize
                  styles={wrapperStyles}
                  initialFontSize={initialFontSize}
                  setInitialFontSize={setInitialFontSize}
                />
              )}
              {navOptions === 'Peso' && (
                <WeightSelector
                  styles={wrapperStyles}
                  currentWeight={currentWeight}
                  setCurrentWeight={setCurrentWeight}
                />
              )}
              {navOptions === 'Font-size dos botões' && (
                <RelativeSizes
                  relativeSizeScale={relativeSizeScale}
                  setRelativeSizeScale={setRelativeSizeScale}
                  setCurrentButtonsData={setCurrentButtonsData}
                />
              )}
              <WrapperForm className={`flex flex-col gap-3 min-w-full`}>
                <HeaderH6 mb={0}>
                  <H6Title>
                    <h6>Prévia</h6>
                  </H6Title>
                </HeaderH6>
                <ResultPreview
                  currentButtonsData={currentButtonsData}
                  initialFontSize={initialFontSize}
                  currentWeight={currentWeight}
                  color={color}
                  lineThickness={lineThickness}
                  textContrastColor={textContrastColor}
                  paddingX={paddingX}
                />
              </WrapperForm>
            </CardContent>
          </Card>
          <Card></Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cores recomendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <ColorGenerator baseColor={color} setTextContrastColor={setTextContrastColor} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

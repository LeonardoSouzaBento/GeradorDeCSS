import { FontSelector, Header } from '@/components/index';
import { ButtonsData, buttonsData, NavOptions, pxSuggestions } from '@/data/buttons/variables';
import { useColorShades } from '@/hooks/useColorShades';
import { useResizeWatcher } from '@/hooks/useResizeWatcher';
import { Card, CardContent, H6Title, HeaderH6, WrapperForm } from '@/ui/index';
import chroma from 'chroma-js';
import { MousePointerClick } from 'lucide-react';
import { useEffect, useState } from 'react';
import ColorGenerator from './components/color-palette/color-generator';
import { InitialSize, RelativeSizes, WeightSelector } from './components/font-styles/index';
import Nav from './components/nav';
import CopyButton from './components/padding-generator/copy-button';
import FontScales from './components/padding-generator/font-scales';
import {
  AlignInput,
  ColorInput,
  HeightInputs,
  OutlineInput,
  PaddingXInput,
  ResultPreview,
} from './components/padding-generator/index';
import RemoveHeaderButton from './components/remove-header-button';

export const wrapperStyles = 'border rounded-lg p-5 pt-[1.5ex] bg-card';

export default function ButtonPage() {
  const [color, setColor] = useState('#1F4780');
  const [textContrastColor, setTextContrastColor] = useState<string>('');
  const [currentWeight, setCurrentWeight] = useState(600);
  const [initialFontSize, setInitialFontSize] = useState(17);
  const [relativeSizeScale, setRelativeSizeScale] = useState<string[]>(['']); // [0.9, 0.95, 1]);
  const [currentButtonsData, setCurrentButtonsData] = useState<ButtonsData[]>(buttonsData);
  const [iconSizeScale, setIconSizeScale] = useState<number[]>([0, 0, 0, 0]);
  const [outlineValue, setOutlineValue] = useState(2);
  const [paddingX, setPaddingX] = useState(pxSuggestions[0]);
  const [navOptions, setNavOptions] = useState<NavOptions>('Alturas');
  const { shades, blackColor, whiteColor } = useColorShades(color);
  const [scaleValue, setScaleValue] = useState<number>(1.067);
  const [removeHeader, setRemoveHeader] = useState<boolean>(false);
  const [resizeCounter, setResizeCounter] = useState<number>(0);
  useResizeWatcher(setResizeCounter);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setRemoveHeader(false);
    }
  }, [resizeCounter]);

  useEffect(() => {
    if (!blackColor || !whiteColor) return;
    const contrastColor =
      chroma(color).luminance() > 0.2 ? blackColor || '#000' : whiteColor || '#fff';
    setTextContrastColor(contrastColor);
  }, [color, blackColor, whiteColor, setTextContrastColor]);

  useEffect(() => {
    const [sm, md] = currentButtonsData
      .filter((_, index) => index !== 2)
      .map((button) => button.height);
    const xlIconSize = md;
    const lgIconSize = sm;
    const mdIconSize = sm - (md - sm) / 2;
    const smIconSize = sm - (md - sm);
    setIconSizeScale([smIconSize, mdIconSize, lgIconSize, xlIconSize]);
  }, [currentButtonsData]);

  useEffect(() => {
    const sm = (1 / scaleValue).toFixed(3);
    const md = (1 / Math.sqrt(scaleValue)).toFixed(3);
    const relativeSizeScale = [sm, md, '1'];
    setRelativeSizeScale(relativeSizeScale);
    const newButtonsData = buttonsData.map((item, index) => ({
      ...item,
      relativeSize: Number(relativeSizeScale[index]),
    }));
    setCurrentButtonsData(newButtonsData);
  }, [scaleValue]);

  return (
    <div
      style={{
        marginBottom: !removeHeader ? '2.5rem' : '0rem',
      }}>
      <Header
        page="buttons"
        title="Gerador de estilos para botões"
        description="Estilize seus botões mais rapidamente"
        className={`pt-7 pb-4 flex flex-col px-3 justify-center gap-0 items-center text-center
        pre-sm:flex-row pre-sm:justify-start pre-sm:gap-3 min-[840px]:px-6 max-w-5xl mx-auto xl:max-w-none`}
        icon={<MousePointerClick />}
        resizeCounter={resizeCounter}
        removeHeader={removeHeader}
      />
      <main className={`space-y-6 px-3 mt-4 min-[840px]:px-6 max-w-5xl mx-auto xl:max-w-none`}>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.8fr_1fr]">
          <Card noHeader className="md:flex md:gap-5 xl:h-157 relative">
            <RemoveHeaderButton removeHeader={removeHeader} setRemoveHeader={setRemoveHeader} />
            <Nav setNavOption={setNavOptions} navOption={navOptions} />
            <CardContent className={`w-full flex flex-col gap-5 items-start`}>
              {navOptions === 'Alturas' && (
                <HeightInputs
                  currentButtonsData={currentButtonsData}
                  setCurrentButtonsData={setCurrentButtonsData}
                />
              )}
              {navOptions === 'Outline' && (
                <OutlineInput outlineValue={outlineValue} setOutlineValue={setOutlineValue} />
              )}
              {navOptions === 'Cor' && <ColorInput color={color} setColor={setColor} />}
              {navOptions === 'Alinhamento' && (
                <AlignInput
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
                <div className="space-y-5">
                  <InitialSize
                    styles={wrapperStyles}
                    initialFontSize={initialFontSize}
                    setInitialFontSize={setInitialFontSize}
                  />
                  <FontScales scaleValue={scaleValue} setScaleValue={setScaleValue} />
                </div>
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
              {navOptions === 'Paleta' && (
                <ColorGenerator shades={shades} blackColor={blackColor} whiteColor={whiteColor} />
              )}
              {navOptions !== 'Paleta' && (
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
                    outlineValue={outlineValue}
                    textContrastColor={textContrastColor}
                    paddingX={paddingX}
                    setPaddingX={setPaddingX}
                  />
                </WrapperForm>
              )}
            </CardContent>
          </Card>
          <Card noHeader className="h-full xl:h-157">
            <CardContent className="h-full relative space-y-5">
              <pre className="h-[calc(100%-3.75rem)]">
                {JSON.stringify(currentButtonsData, null, 2)}
              </pre>
              <CopyButton />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

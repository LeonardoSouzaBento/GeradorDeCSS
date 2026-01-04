import { FontSelector, Header } from '@/components/index';
import {
  ButtonsData,
  buttonsData,
  buttonStylesExample,
  defaultIconSizes,
  iconReturnExample,
  NavOptions,
  pxSuggestions,
  variablesReturnExample
} from '@/data/buttons/variables';
import { useColorShades } from '@/hooks/useColorShades';
import { useResizeWatcher } from '@/hooks/useResizeWatcher';
import { Card, CardContent, H6Title, HeaderH6, WrapperForm } from '@/ui/index';
import { MousePointerClick } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
  /* valores unicos */
  const [color, setColor] = useState('#1F4780');
  const [currentWeight, setCurrentWeight] = useState(600);
  const [initialFontSize, setInitialFontSize] = useState(17);
  const [outlineValue, setOutlineValue] = useState(2);
  const [paddingX, setPaddingX] = useState(pxSuggestions[0]);
  const [scaleValue, setScaleValue] = useState<number>(1.067);
  const [strokeWidth, setStrokeWidth] = useState<number>(2.6);
  /* escalas e dados compostos*/
  const [relativeSizeScale, setRelativeSizeScale] = useState<string[]>(['']);
  const [iconSizes, setIconSizes] = useState<string[]>(defaultIconSizes);
  const [currentButtonsData, setCurrentButtonsData] = useState<ButtonsData[]>(buttonsData);
  const [iconHeightScale, setIconHeightScale] = useState<number[]>([0, 0, 0, 0]);
  const { shades, color1000, color50 } = useColorShades(color);
  /* iteratividade */
  const [navOptions, setNavOptions] = useState<NavOptions>('Alturas');
  const [removeHeader, setRemoveHeader] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [resizeCounter, setResizeCounter] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useResizeWatcher(setResizeCounter);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setRemoveHeader(false);
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [resizeCounter]);

  /* alturas dos botões de ícone */
  useEffect(() => {
    const [sm, md] = currentButtonsData
      .filter((_, index) => index !== 2)
      .map((button) => button.height);
    const small = sm - (md - sm); //altura do botão pequeno - a diferença de aturas
    const medium = sm - (md - sm) / 2; //altura do botão pequeno - metade da diferença de aturas
    const largeSize = sm; //altura do botão pequeno
    const buttonSize = md; //altura do botão normal
    const iconHeightScale = [small, medium, largeSize, buttonSize];
    setIconHeightScale(iconHeightScale);
  }, [currentButtonsData]);

  /* tamanhos relativos da fonte dos botões */
  useEffect(() => {
    /* escala dos botões */
    const sm = (1 / scaleValue).toFixed(3);
    const md = (1 / Math.sqrt(scaleValue)).toFixed(3);
    const relativeSizeScale = [sm, md, '1'];
    setRelativeSizeScale(relativeSizeScale);
    const newButtonsData = buttonsData.map((item, index) => ({
      ...item,
      relativeSize: Number(relativeSizeScale[index]),
    }));
    setCurrentButtonsData(newButtonsData);

    /* escala dos ícones */
    const firstIconSizes = relativeSizeScale.map((item) => `${item}em`);
    const restIconSizes = [0, 1, 2, 4].map((index) => {
      const size = Math.pow(scaleValue, index + 1).toFixed(3);
      return `${size}em`;
    });
    restIconSizes.unshift(Math.sqrt(scaleValue).toFixed(3) + 'em');
    const iconSizes = [...firstIconSizes, ...restIconSizes];
    setIconSizes(iconSizes);
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
        isMobile={isMobile}
      />
      <main className={`space-y-6 px-3 mt-4 min-[840px]:px-6 max-w-5xl mx-auto xl:max-w-none`}>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.8fr_1fr]">
          <Card noHeader className="md:flex md:gap-4 xl:h-157 relative p-5">
            <RemoveHeaderButton removeHeader={removeHeader} setRemoveHeader={setRemoveHeader} />
            <Nav setNavOption={setNavOptions} navOption={navOptions} />
            <CardContent
              ref={containerRef}
              className={`w-full flex flex-col gap-5 items-start overflow-y-scroll scrollbar-hidden`}>
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
                  currentWeight={currentWeight}
                  setCurrentWeight={setCurrentWeight}
                  color={color}
                  iconSizes={iconSizes}
                  strokeWidth={strokeWidth}
                  setStrokeWidth={setStrokeWidth}
                  containerRef={containerRef}
                />
              )}
              {navOptions === 'Font-size dos botões' && (
                <RelativeSizes
                  relativeSizeScale={relativeSizeScale}
                  setRelativeSizeScale={setRelativeSizeScale}
                  setCurrentButtonsData={setCurrentButtonsData}
                />
              )}
              {navOptions === 'Paleta' && <ColorGenerator shades={shades} />}
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
                    color50={color50}
                    color1000={color1000}
                    outlineValue={outlineValue}
                    paddingX={paddingX}
                    iconHeightScale={iconHeightScale}
                    iconSizes={iconSizes}
                    strokeWidth={strokeWidth}
                  />
                </WrapperForm>
              )}
            </CardContent>
          </Card>
          <Card noHeader className="h-full xl:h-157 p-5 border">
            <CardContent className="h-full relative space-y-5">
              <pre className="h-[calc(100%-3.75rem)]">
                {buttonStylesExample}
              </pre>
              <CopyButton />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

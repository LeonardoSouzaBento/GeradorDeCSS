import { FontSelector, Header } from '@/components/index';
import type { ButtonsData, NavOptions, OptionReturn, PaddingTypes } from '@/data/buttons/variables';
import { buttonsData, defaultIconSizes, optionsReturn } from '@/data/buttons/variables';
import { genButtonStyles } from '@/functions/buttons/genButtonStyles';
import { genIconComponent } from '@/functions/buttons/genIconComponent';
import { genVariables } from '@/functions/buttons/genVariables';
import { useColorShades } from '@/hooks/useColorShades';
import { useResizeWatcher } from '@/hooks/useResizeWatcher';
import { Card, CardContent } from '@/ui/index';
import { MousePointerClick } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ColorGenerator from './components/color-palette/color-generator';
import { InitialSize, RelativeSizes, WeightSelector } from './components/font-styles/index';
import { CSSReturn, Nav, OptionsMenu, Preview, RemoveHeaderButton } from './components/index';
import FontScales from './components/padding-generator/font-scales';
import {
  AlignInput,
  ColorInput,
  HeightInputs,
  OutlineInput,
  PaddingXInput,
} from './components/padding-generator/index';

export const wrapperStyles = 'border rounded-lg p-5 pt-[1.5ex] bg-card';

export default function ButtonPage({ resizingCounter }: { resizingCounter?: number }) {
  /* valores unicos */
  const [color, setColor] = useState('#1F4780');
  const [currentWeight, setCurrentWeight] = useState(600);
  const [initialFontSize, setInitialFontSize] = useState(17);
  const [outlineValue, setOutlineValue] = useState(2);
  const [paddingX, setPaddingX] = useState(0.9);
  const [scaleValue, setScaleValue] = useState<number>(1.067);
  const [strokeWidth, setStrokeWidth] = useState<number>(2.6);
  /* escalas e dados compostos*/
  const { shades, color1000, color50 } = useColorShades(color);
  const [iconSizes, setIconSizes] = useState<string[]>(defaultIconSizes);
  const [iconButtonSizes, setIconButtonSizes] = useState<number[]>([0, 0, 0, 0]);
  const [currentButtonsData, setCurrentButtonsData] = useState<ButtonsData[]>(buttonsData);
  const [relativeSizeScale, setRelativeSizeScale] = useState<string[]>(['0.93', '0.97', '1']);
  const [fillPaddings, setFillPaddings] = useState<PaddingTypes[]>([
    { px: '', pb: '', pt: '', py: '' },
    { px: '', pb: '', pt: '', py: '' },
    { px: '', pb: '', pt: '', py: '' },
  ]);
  const [outlinePaddings, setOutlinePaddings] = useState<PaddingTypes[]>([
    { px: '', pb: '', pt: '', py: '' },
    { px: '', pb: '', pt: '', py: '' },
    { px: '', pb: '', pt: '', py: '' },
  ]);
  /* saidas e iteratividade */
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [optionReturn, setOptionReturn] = useState<OptionReturn>('botões');
  const currentOptionIndex = optionsReturn.findIndex((item) => item === optionReturn);
  const [returns, setReturns] = useState<string[]>([]);
  const [navOptions, setNavOptions] = useState<NavOptions>('Peso');
  const [removeHeader, setRemoveHeader] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setRemoveHeader(false);
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [resizingCounter]);

  /* alturas dos botões de ícone */
  useEffect(() => {
    const [sm, md] = currentButtonsData
      .filter((_, index) => index !== 2)
      .map((button) => button.height);
    const small = sm - (md - sm); //altura do botão pequeno - a diferença de aturas
    const medium = sm - (md - sm) / 2; //altura do botão pequeno - metade da diferença de aturas
    const largeSize = sm; //altura do botão pequeno
    const buttonSize = md; //altura do botão normal
    const iconButtonSizes = [small, medium, largeSize, buttonSize];
    setIconButtonSizes(iconButtonSizes);
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
    const restIconSizes = [0, 1, 2, 3].map((index) => {
      const size = Math.pow(scaleValue, index + 1).toFixed(3);
      return `${size}em`;
    });
    restIconSizes.unshift(Math.sqrt(scaleValue).toFixed(3) + 'em');
    const iconSizes = [...firstIconSizes, ...restIconSizes];
    setIconSizes(iconSizes);
  }, [scaleValue]);

  const formatCss = () => {
    const varsReturn = genVariables(
      relativeSizeScale,
      shades.map((item) => item.hex),
      color
    );
    const buttonsReturn = genButtonStyles(
      iconButtonSizes,
      fillPaddings,
      outlinePaddings,
      outlineValue
    );
    const iconReturn = genIconComponent(iconSizes, strokeWidth);
    const muiIconReturn = genIconComponent(iconSizes, strokeWidth, currentWeight, 'mui icon');
    setReturns([varsReturn, buttonsReturn, iconReturn, muiIconReturn]);
  };

  useEffect(() => {
    formatCss();
  }, [
    color,
    currentWeight,
    initialFontSize,
    outlineValue,
    paddingX,
    scaleValue,
    strokeWidth,
    relativeSizeScale,
    iconSizes,
    iconButtonSizes,
    currentButtonsData,
  ]);

  return (
    <div
      onClick={() => setOpenSelect(false)}
      style={{
        marginBottom: !removeHeader ? '2.5rem' : '0rem',
      }}>
      <Header
        page="buttons"
        title="Gerador de estilos para botões"
        description="Estilize seus botões mais rapidamente"
        className={`pt-7 pb-4 flex flex-col px-3 justify-center gap-0 items-center text-center
        pre-sm:flex-row pre-sm:justify-start pre-sm:gap-3 next-md:px-6 max-w-5xl mx-auto xl:max-w-none`}
        icon={<MousePointerClick />}
        resizingCounter={resizingCounter}
        removeHeader={removeHeader}
        isMobile={isMobile}
      />
      <main className={`space-y-6 px-3 mt-4 next-md:px-6 max-w-5xl mx-auto xl:max-w-none`}>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
          <Card noHeader className="md:flex md:gap-4 xl:h-157 relative p-5" ref={cardRef}>
            <RemoveHeaderButton removeHeader={removeHeader} setRemoveHeader={setRemoveHeader} />
            <OptionsMenu
              openSelect={openSelect}
              setNavOption={setNavOptions}
              navOption={navOptions}
              cardRef={cardRef}
              setOpenSelect={setOpenSelect}
            />
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

              <Preview
                currentButtonsData={currentButtonsData}
                initialFontSize={initialFontSize}
                currentWeight={currentWeight}
                color={color}
                outlineValue={outlineValue}
                paddingX={paddingX}
                iconButtonSizes={iconButtonSizes}
                color50={color50}
                color1000={color1000}
                iconSizes={iconSizes}
                strokeWidth={strokeWidth}
                setFillPaddings={setFillPaddings}
                setOutlinePaddings={setOutlinePaddings}
              />
            </CardContent>
          </Card>
          <CSSReturn
            optionReturn={optionReturn}
            setOptionReturn={setOptionReturn}
            returns={returns}
            currentOptionIndex={currentOptionIndex}
          />
        </div>
      </main>
    </div>
  );
}

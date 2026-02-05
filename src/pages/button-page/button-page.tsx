import { FontSelector, Header } from '@/components/index';
import type { ButtonsData, NavOptions, OptionReturn, PaddingTypes } from '@/data/buttons/variables';
import { buttonsData, defaultIconSizes, optionsReturn } from '@/data/buttons/variables';
import { genButtonStyles } from '@/functions/buttons/genButtonStyles';
import { genIconComponent } from '@/functions/buttons/genIconComponent';
import { genVariables } from '@/functions/buttons/genVariables';
import { useColorShades } from '@/hooks/useColorShades';
import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Alert,
  AlertDescription,
  AlertTitle,
  Icon,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/ui/index';
import chroma from 'chroma-js';
import { AlertCircle, MousePointerClick } from 'lucide-react';
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
import ButtonStyleTester from '../home/components/button-style-tester';

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
  const [badContrast, setBadContrast] = useState<boolean>(false);
  const [colorNickname, setColorNickname] = useState<string>('primary');
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
  const [optionReturn, setOptionReturn] = useState<OptionReturn>('botão');
  const [removeHeader, setRemoveHeader] = useState<boolean>(false);
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const currentOptionIndex = optionsReturn.findIndex((item) => item === optionReturn);
  const [returns, setReturns] = useState<string[]>([]);
  const [navOptions, setNavOptions] = useState<NavOptions>('Pesos');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(true);
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
    // escala dos botões
    const sm = (1 / scaleValue).toFixed(3);
    const md = (1 / Math.sqrt(scaleValue)).toFixed(3);
    const relativeSizeScale = [sm, md, '1'];
    setRelativeSizeScale(relativeSizeScale);
    const newButtonsData = buttonsData.map((item, index) => ({
      ...item,
      relativeSize: Number(relativeSizeScale[index]),
    }));
    setCurrentButtonsData(newButtonsData);

    // escala dos ícones
    const firstIconSizes = relativeSizeScale.map((item) => `${item}em`);
    const restIconSizes = [0, 1, 2, 3].map((index) => {
      const size = Math.pow(scaleValue, index + 1).toFixed(3);
      return `${size}em`;
    });
    restIconSizes.unshift(Math.sqrt(scaleValue).toFixed(3) + 'em');
    const iconSizes = [...firstIconSizes, ...restIconSizes];
    setIconSizes(iconSizes);
  }, [scaleValue]);

  useEffect(() => {
    const contrast = chroma.contrast(color, '#fff');
    setBadContrast(contrast <= 4.5);
  }, [color]);

  /* formatar o css */
  const formatCss = () => {
    const varsReturn = genVariables(
      relativeSizeScale,
      shades.map((item) => item.hex),
      color,
      colorNickname,
    );
    const buttonsReturn = genButtonStyles(
      iconButtonSizes,
      fillPaddings,
      outlinePaddings,
      outlineValue,
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
    colorNickname,
  ]);

  /* Mudar o retorno conforme a opção selecionada */
  useEffect(() => {
    if (navOptions === 'Paleta') {
      setOptionReturn('variáveis');
    } else if (navOptions === 'Pesos') {
      setOptionReturn('lucide icon');
    } else {
      if (optionReturn !== 'botão') {
        setOptionReturn('botão');
      }
    }
  }, [navOptions]);

  return (
    <div
      onClick={() => setOpenSelect(false)}
      className="w-screen min-h-dvh grid grid-cols-1"
      style={{
        marginBottom: !removeHeader ? '2rem' : '0rem',
      }}>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="p-5">
          <Alert>
            <Icon Icon={AlertCircle} />
            <AlertTitle>Importante</AlertTitle>
            <AlertDescription>
              Use nosso componente de ícone mostrado na saída para evitar a distorçao da altura do
              botão.
            </AlertDescription>
          </Alert>
        </DialogContent>
      </Dialog>
      <Header
        page="buttons"
        title="Gerador de estilos para botões"
        description="Estilize seus botões mais rapidamente"
        className={`flex flex-col px-3 justify-center gap-0 items-center text-center
        pre-sm:flex-row pre-sm:justify-start pre-sm:gap-3 next-md:px-6 lg:max-w-5xl xl:max-w-6xl mx-auto`}
        icon={<MousePointerClick />}
        resizingCounter={resizingCounter}
        removeHeader={removeHeader}
        isMobile={isMobile}
      />
      <main className={`w-full space-y-6 px-3 next-md:px-6 lg:max-w-5xl xl:max-w-6xl mx-auto`}>
        <div className="grid grid-cols-1 gap-6">
          <Card className="relative" ref={cardRef}>
            <CardHeader className="border-none mb-[0.25ex]">
              <CardTitle>
                <h3>Configurações</h3>
              </CardTitle>
            </CardHeader>
            <RemoveHeaderButton removeHeader={removeHeader} setRemoveHeader={setRemoveHeader} />
            <div className="flex flex-col gap-4 md:flex-row">
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
                {navOptions === 'Pesos' && (
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
                  badContrast={badContrast}
                />
              </CardContent>
            </div>
          </Card>
          <CSSReturn
            optionReturn={optionReturn}
            setOptionReturn={setOptionReturn}
            returns={returns}
            currentOptionIndex={currentOptionIndex}
            colorNickname={colorNickname}
            setColorNickname={setColorNickname}
          />
          <Card>
            <CardHeader>
              <CardTitle>
                <h3>Componente para pré-visualizar estilos de estados</h3>
              </CardTitle>
              <CardDescription>Baixe esse componente para testar os estilos</CardDescription>
            </CardHeader>
            <CardContent className="max-w-max space-y-4">
              <ButtonStyleTester />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

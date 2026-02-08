import { ColorPalletPreview } from '@/components';
import {
  lightnessValues,
  paletteVariables,
  saturationValues,
  variables,
} from '@/data/palette-generator/data';
import { getHSL } from '@/functions/pallet-generator/genInitialColors';
import { ColorShade, useColorShades } from '@/hooks/useColorShades';
import { Card, CardHeader, CardTitle, H6Title, HeaderH6, Icon, FormWrapper } from '@/ui';
import { Eye, Palette, Settings2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CssReturn, Inputs, Preview, RestColorsInput, ThematicColorVars } from './pallet-generator';

/* pegar os stops de cada variável */
const getBaseColor = (stops: number[], shades: ColorShade[]) => {
  for (const stop of stops) {
    const found = shades.find((s) => s.stop === stop);
    if (found) return found.hex;
  }
  return shades[0].hex;
};

export default function PaletteGeneratorPage() {
  const [baseColor, setBaseColor] = useState('#1F4780');
  const [inputValue, setInputValue] = useState<string>('#1F4780');
  const { shades } = useColorShades(baseColor);
  const [cssReturn, setCssReturn] = useState('');
  const [colorPrefix, setColorPrefix] = useState<boolean>(true);
  const [colorName, setColorName] = useState<string>('primary');
  const [saturation, setSaturation] = useState<number>(3);
  const [lightness, setLightness] = useState<number>(5);
  const [neutralColors, setNeutralColors] = useState<string[]>([]);

  /* gerar nova paleta */
  function genNewPalette(process: 'new' | 'update') {
    if (process === 'update') {
      if (neutralColors.length === variables.length) {
        const hue = neutralColors[0].split(' ')[0].replace('hsl(', '');
        const array = [1, 2, 3, 4, 5];
        const newSaturations = array.map((_, index) => saturationValues[index][saturation]);
        const newLightness = array.map((_, index) => lightnessValues[index][lightness]);
        const newColors = array.map(
          (_, index) => `hsl(${hue} ${newSaturations[index]}% ${newLightness[index]}%)`,
        );
        setNeutralColors(newColors);
      }
    } else if (process === 'new') {
      const newColors = variables.map((name, index) => {
        const config = paletteVariables[name];
        const baseHex = getBaseColor(config.stops, shades);

        return getHSL({
          color: baseHex,
          saturation: saturationValues[index][saturation],
          lightness: lightnessValues[index][lightness],
        });
      });
      setNeutralColors(newColors);
    }
  }

  /* setar as cores iniciais */
  useEffect(() => {
    genNewPalette('new');
  }, []);

  useEffect(() => {
    genNewPalette('new');
  }, [baseColor]);

  useEffect(() => {
    genNewPalette('update');
  }, [saturation, lightness]);

  /* gerar o css */
  useEffect(() => {
    if (neutralColors.length === variables.length) {
      const cssReturn = neutralColors.map(
        (color: string, index: number) => `--color-${variables[index]}: ${color};\n`,
      );
      setCssReturn(cssReturn.join(''));
    }
  }, [neutralColors]);

  return (
    <div className="relative">
      <main className="px-3 sm:px-4 mx-auto pt-4 space-y-6 pb-6 min-h-dvh max-w-7xl">
        <Card className="space-y-4">
          <CardHeader className="border-none mb-1">
            <CardTitle className="text-primary">
              <Icon Icon={Palette} size="h3" />
              <h3>Cores neutras</h3>
            </CardTitle>
          </CardHeader>
          <FormWrapper>
            <HeaderH6 mb={1.5} separator>
              <H6Title>
                <Icon Icon={Settings2} />
                <h6>Preferências</h6>
              </H6Title>
            </HeaderH6>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-[0.35fr_0.65fr]">
              <Inputs
                inputValue={inputValue}
                setInputValue={setInputValue}
                setBaseColor={setBaseColor}
                saturation={saturation}
                setSaturation={setSaturation}
                lightness={lightness}
                setLightness={setLightness}
              />
            </div>
          </FormWrapper>
          <Preview neutralColors={neutralColors} />
          <CssReturn neutralColors={cssReturn} />
        </Card>
        <Card className="space-y-4">
          <CardHeader className="border-none mb-1">
            <CardTitle className="text-primary">
              <Icon Icon={Palette} size="h3" />
              <h3>Cores temáticas</h3>
            </CardTitle>
          </CardHeader>
          <div className="flex flex-col gap-4 lg:flex-row">
            <RestColorsInput
              color={baseColor}
              setColor={setBaseColor}
              colorPrefix={colorPrefix}
              setColorPrefix={setColorPrefix}
              colorName={colorName}
              setColorName={setColorName}
            />
            <FormWrapper>
              <HeaderH6 mb={1.5} separator>
                <H6Title>
                  <Icon Icon={Eye} />
                  <h6>Prévia</h6>
                </H6Title>
              </HeaderH6>
              <ColorPalletPreview shades={shades} cssWrapper={'max-w-max'} />
            </FormWrapper>
          </div>
          <ThematicColorVars shades={shades} colorName={colorName} colorPrefix={colorPrefix} />
        </Card>
      </main>
      <div className="dot-pattern-image min-h-screen w-full absolute top-0 left-0 -z-2" />
    </div>
  );
}

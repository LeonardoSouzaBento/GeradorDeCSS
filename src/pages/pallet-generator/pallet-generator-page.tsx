import {
  lightnessValues,
  paletteVariables,
  saturationValues,
  variables,
} from '@/data/palette-generator/data';
import { getHSL } from '@/functions/pallet-generator/genInitialColors';
import { useColorShades } from '@/hooks/useColorShades';
import {
  Card,
  CardHeader,
  CardTitle,
  H6Title,
  HeaderH6,
  Separator,
  WrapperForm
} from '@/ui';
import { useEffect, useState } from 'react';
import { CssReturn, Inputs, Preview } from './components';

export default function PaletteGeneratorPage() {
  const [baseColor, setBaseColor] = useState('#1F4780');
  const [inputValue, setInputValue] = useState<string>('#1F4780');
  const { shades } = useColorShades(baseColor);
  const [cssReturn, setCssReturn] = useState('');
  const [saturation, setSaturation] = useState<number>(3);
  const [lightness, setLightness] = useState<number>(5);
  const [neutralColors, setNeutralColors] = useState<string[]>([]);

  /* pegar os stops de cada variável */
  const getBaseColor = (stops: number[]) => {
    for (const stop of stops) {
      const found = shades.find((s: any) => s.stop === stop);
      if (found) return found.hex;
    }
    return shades[0].hex;
  };

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
        const baseHex = getBaseColor(config.stops);

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
    <main className="px-3 sm:px-4 mx-auto mt-4 space-y-6 pb-6 min-h-dvh max-w-7xl">
      <Card className="space-y-4">
        <CardHeader className="border-none mb-0">
          <CardTitle className="text-primary">Cores neutras</CardTitle>
        </CardHeader>
        <WrapperForm>
          <HeaderH6 mb={1.5}>
            <H6Title>
              <h6>Preferências</h6>
            </H6Title>
            <Separator />
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
        </WrapperForm>
        <Preview neutralColors={neutralColors} />
        <CssReturn neutralColors={cssReturn} />
      </Card>
    </main>
  );
}

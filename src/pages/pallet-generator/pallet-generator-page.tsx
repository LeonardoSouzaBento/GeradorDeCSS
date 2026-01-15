import {
  lightnessValues,
  paletteVariables,
  saturationValues,
  variables,
} from '@/data/palette-generator/data';
import { useColorShades } from '@/hooks/useColorShades';
import { Card, CardHeader, CardTitle, Input, Label, WrapperInput } from '@/ui';
import { useEffect, useState } from 'react';
import { CssReturn, Preview } from './components';
import { getHSL } from '@/functions/pallet-generator/genInitialColors';

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
          (_, index) => `hsl(${hue} ${newSaturations[index]}% ${newLightness[index]}%)`
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
        (color: string, index: number) => `--color-${variables[index]}: ${color};\n`
      );
      setCssReturn(cssReturn.join(''));
    }
  }, [neutralColors]);

  return (
    <main className="px-3 sm:px-4 mt-4 space-y-6 pb-6">
      <Card className="space-y-4">
        <CardHeader>
          <CardTitle className="text-primary">Preferências</CardTitle>
        </CardHeader>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-[0.35fr_0.65fr]">
          {/* cor base */}
          <WrapperInput className="">
            <Label>Cor base</Label>
            <div className="grid grid-cols-1 md-sm:grid-cols-[0.65fr_0.35fr] gap-2">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                type="color"
                value={inputValue}
                onChange={(e) => {
                  const value = e.target.value;
                  setInputValue(value);
                  if (value === '' || /^#([0-9A-F]{0,6})$/i.test(value)) {
                    setBaseColor(value);
                  }
                }}
              />
            </div>
          </WrapperInput>
          {/* saturação e luminosidade */}
          <div
            className={`flex flex-col gap-4
             sm:flex-row sm:items-center [&>div>div]:border 
             [&>div>div]:rounded-md [&>div>div]:px-2`}>
            <WrapperInput>
              <Label>Saturação</Label>
              <div>
                <Input
                  type="range"
                  min={0}
                  max={7}
                  value={saturation}
                  onChange={(e) => setSaturation(Number(e.target.value))}
                />
              </div>
            </WrapperInput>
            <WrapperInput>
              <Label>Luminosidade</Label>
              <div>
                <Input
                  type="range"
                  min={0}
                  max={10}
                  value={lightness}
                  onChange={(e) => setLightness(Number(e.target.value))}
                />
              </div>
            </WrapperInput>
          </div>
        </div>
      </Card>
      <Preview neutralColors={neutralColors} />
      <CssReturn neutralColors={cssReturn} />
    </main>
  );
}

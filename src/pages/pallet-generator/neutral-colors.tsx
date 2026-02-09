import {
  lightnessValues,
  paletteVariables,
  saturationValues,
  colorNames,
} from '@/data/palette-generator/data';
import { getHSL } from '@/functions/pallet-generator/genInitialColors';
import { ColorShade } from '@/hooks/useColorShades';
import { Card, CardHeader, CardTitle, Icon } from '@/ui';
import { Palette } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CssReturn, Inputs, Preview } from './index';

/* pegar os stops de cada variável */
const getBaseColor = (stops: number[], shades: ColorShade[]) => {
  for (const stop of stops) {
    const found = shades.find((s) => s.stop === stop);
    if (found) return found.hex;
  }
  return shades[0].hex;
};

interface Props {
  baseColor: string;
  setBaseColor: (color: string) => void;
  shades: ColorShade[];
}

export type NeutralColors = Record<string, string>;

export const NeutralColors = ({ baseColor, setBaseColor, shades }: Props) => {
  const [inputValue, setInputValue] = useState<string>('#1F4780');
  const [cssReturn, setCssReturn] = useState('');
  const [saturation, setSaturation] = useState<number>(3);
  const [lightness, setLightness] = useState<number>(5);
  const [neutralColors, setNeutralColors] = useState<string[]>([]);
  const neutralColorsResult: NeutralColors = neutralColors.reduce((acc, color, index) => {
    acc[colorNames[index]] = color;
    return acc;
  }, {} as NeutralColors);

  /* gerar nova paleta */
  function genNewPalette(process: 'new' | 'update') {
    if (process === 'update') {
      if (neutralColors.length === colorNames.length) {
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
      const newColors = colorNames.map((name, index) => {
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
    if (neutralColors.length === colorNames.length) {
      const cssReturn = neutralColors.map(
        (color: string, index: number) => `--color-${colorNames[index]}: ${color};\n`,
      );
      setCssReturn(cssReturn.join(''));
    }
  }, [neutralColors]);

  return (
    <Card className="space-y-4">
      <CardHeader className="mb-3">
        <CardTitle className="text-primary">
          <Icon Icon={Palette} size="h3" />
          <h3>Cores neutras</h3>
        </CardTitle>
      </CardHeader>

      <div className="space-y-4">
        <Inputs
          inputValue={inputValue}
          setInputValue={setInputValue}
          setBaseColor={setBaseColor}
          saturation={saturation}
          setSaturation={setSaturation}
          lightness={lightness}
          setLightness={setLightness}
        />
        <Preview neutralColors={neutralColorsResult} />
        <CssReturn neutralColors={cssReturn} />
      </div>
    </Card>
  );
};

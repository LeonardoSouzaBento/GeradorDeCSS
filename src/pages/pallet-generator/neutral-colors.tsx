import {
  lightnessValues,
  paletteVariables,
  saturationValues,
  colorNames,
} from '@/data/palette-generator/data';
import { getHSL } from '@/functions/pallet-generator/genInitialColors';
import { ColorShade } from '@/hooks/useColorShades';
import { cn } from '@/lib/utils';
import { Card, Icon } from '@/ui';
import { Eye, NotepadText, Palette, Settings2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CssReturn, Inputs, Preview } from './index';

type CardSection = 'preferencias' | 'previa' | 'saida';

const sectionOptions: { id: CardSection; label: string; icon: typeof Settings2 }[] = [
  { id: 'preferencias', label: 'Preferências', icon: Settings2 },
  { id: 'previa', label: 'Prévia', icon: Eye },
  { id: 'saida', label: 'Código', icon: NotepadText },
];

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
  const [activeSection, setActiveSection] = useState<CardSection>('preferencias');
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
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-foreground">
        <Icon Icon={Palette} size="md" className="text-primary" />
        <h3>Cores neutras</h3>
      </div>

      <Card noHeader className="space-y-4">
        <nav className="w-full min-w-0 max-w-full flex items-center gap-1 overflow-x-auto pb-2.5 border-b border-border/50">
          {sectionOptions.map((opt) => {
            const isActive = activeSection === opt.id;
            const OptIcon = opt.icon;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setActiveSection(opt.id)}
                className={cn(
                  'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full small-text transition-colors whitespace-nowrap shrink-0 cursor-pointer',
                  isActive
                    ? 'bg-secondary text-secondary-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60',
                )}
              >
                <OptIcon strokeWidth={2} className="size-5 shrink-0" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="space-y-4">
          <div className={cn(activeSection !== 'preferencias' && 'hidden')}>
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
          <div className={cn(activeSection !== 'previa' && 'hidden')}>
            <Preview neutralColors={neutralColorsResult} />
          </div>
          <div className={cn(activeSection !== 'saida' && 'hidden')}>
            <CssReturn neutralColors={cssReturn} />
          </div>
        </div>
      </Card>
    </div>
  );
};

import { iconSm } from '@/css/lucideIcons';
import { ColorShade } from '@/hooks/useColorShades';
import { H6Description, H6Title, HeaderH6, WrapperButtons, WrapperForm } from '@/ui';
import { ChartSpline, Palette } from 'lucide-react';
import { useMemo } from 'react';

interface ColorGeneratorProps {
  shades: ColorShade[];
}

const buttonNames = ['Leve', 'Bom', 'Maior', 'Máximo'];

const ColorGenerator = ({ shades }: ColorGeneratorProps) => {
  const baseColor = shades.find((item) => item.isBase);

  const FIXED_STOPS = [800, 700, 100];
  const MIDDLE_STOPS = [600, 500, 400];
  const CONTRAST_THRESHOLD = 6.5;

  const selectedShades = useMemo(() => {
    if (!shades.length) return [];
    const fixed = shades.filter((s) => FIXED_STOPS.includes(s.stop));
    const middleCandidates = shades
      .filter((s) => MIDDLE_STOPS.includes(s.stop))
      .sort((a, b) => b.contrastValue - a.contrastValue);

    const bestAccessible = middleCandidates.find((s) => s.contrastValue > CONTRAST_THRESHOLD);
    const fallback400 = shades.find((s) => s.stop === 400);
    const middle = bestAccessible ?? fallback400;

    return [...fixed, middle]
      .filter(Boolean)
      .filter((item, index, arr) => arr.findIndex((i) => i.stop === item!.stop) === index)
      .sort((a, b) => a.contrastValue - b.contrastValue);
  }, [shades]);

  return (
    <div className="space-y-5">
      <WrapperForm>
        <HeaderH6 mb={1.2}>
          <H6Title>
            <Palette {...iconSm} />
            <h6>Paleta de Cores</h6>
          </H6Title>
        </HeaderH6>
        <div className="w-full flex flex-wrap rounded-lg overflow-hidden">
          {shades.map((item) => (
            <div
              key={item.stop}
              className={`w-20.5 text-left p-[1ex]`}
              style={{
                backgroundColor: item.hex,
                color: item.textColor,
                zIndex: item.isBase ? 2 : 1,
              }}>
              <p className="small-text font-medium max-w-max">{item.stop}</p>
            </div>
          ))}
        </div>
        <p className="pt-[1cap] smaller-text">
          Sua cor: <br /> <strong>{baseColor.stop}</strong> | {baseColor.hex}{' '}
        </p>
      </WrapperForm>
      <WrapperForm>
        <HeaderH6 mb={1.5}>
          <H6Title>
            <ChartSpline {...iconSm} />
            <h6>Contrastes sugeridos</h6>
          </H6Title>
          <H6Description>Contraste dos fundos com a cor 50 ou 1000 aplicada no texto</H6Description>
        </HeaderH6>
        <WrapperButtons className="flex gap-2">
          {selectedShades.map((item, index) => (
            <button
              key={index}
              className="h-10 px-[1.4ex] rounded-full"
              style={{ backgroundColor: item.hex, color: item.textColor }}>
              <p className="small-text">
                {item.stop} - <u className="font-medium">{item.contrastValue}</u>
              </p>
            </button>
          ))}
        </WrapperButtons>
      </WrapperForm>
    </div>
  );
};

export default ColorGenerator;

/* 
{stop: 700, hex: '#465F92', isBase: false, textColor: '#F2F3F7', contrastValue: 5.717593960816893}
{stop: 400, hex: '#96A0C0', isBase: false, textColor: '#000D3E', contrastValue: 7.174225685949362}
{stop: 800, hex: '#1F4780', isBase: true, textColor: '#F2F3F7', contrastValue: 8.338443601200323}
{stop: 100, hex: '#E4E6EF', isBase: false, textColor: '#000D3E', contrastValue: 14.961828553986662}

*/

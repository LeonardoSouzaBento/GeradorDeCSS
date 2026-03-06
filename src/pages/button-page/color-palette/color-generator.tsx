import { ColorShade } from "@/hooks/useColorShades";
import {
  H6Description,
  H6Title,
  HeaderH6,
  ButtonsWrapper,
  FormWrapper,
  Icon,
} from "@/ui";
import { ChartSpline, Palette } from "lucide-react";
import { useMemo } from "react";
import { PalletPreview } from "@/components";

interface ColorGeneratorProps {
  shades: ColorShade[];
}

const ColorGenerator = ({ shades }: ColorGeneratorProps) => {
  const FIXED_STOPS = [800, 700, 100];
  const MIDDLE_STOPS = [600, 500, 400];
  const CONTRAST_THRESHOLD = 6.5;

  const suggestedColorTones = useMemo(() => {
    if (!shades.length) return [];
    const fixed = shades.filter((s) => FIXED_STOPS.includes(s.stop));
    const middleCandidates = shades
      .filter((s) => MIDDLE_STOPS.includes(s.stop))
      .sort((a, b) => b.contrastValue - a.contrastValue);

    const bestAccessible = middleCandidates.find(
      (s) => s.contrastValue > CONTRAST_THRESHOLD
    );
    const fallback400 = shades.find((s) => s.stop === 400);
    const middle = bestAccessible ?? fallback400;

    return [...fixed, middle]
      .filter(Boolean)
      .filter(
        (item, index, arr) =>
          arr.findIndex((i) => i.stop === item!.stop) === index
      )
      .sort((a, b) => a.contrastValue - b.contrastValue);
  }, [shades]);

  return (
    <div className="space-y-5">
      <FormWrapper>
        <HeaderH6 mb={1.2}>
          <H6Title>
            <Icon Icon={Palette} />
            <h6>Paleta de Cores</h6>
          </H6Title>
        </HeaderH6>
        <PalletPreview shades={shades} />
      </FormWrapper>
      <FormWrapper>
        <HeaderH6 mb={1.5}>
          <H6Title>
            <Icon Icon={ChartSpline} size="sm" />
            <h6>Contrastes sugeridos</h6>
          </H6Title>
          <H6Description>
            Contraste dos fundos com a cor 50 ou 1000 aplicada no texto
          </H6Description>
        </HeaderH6>
        <ButtonsWrapper className="flex gap-2">
          {suggestedColorTones.map((item, index) => (
            <div
              key={index}
              className="h-10 px-[1.4ex] rounded-full flex justify-center items-center"
              style={{ backgroundColor: item.hex, color: item.textColor }}
            >
              <p className="small-text">
                {item.stop} -{" "}
                <span className="font-medium underline">
                  {item.contrastValue}
                </span>
              </p>
            </div>
          ))}
        </ButtonsWrapper>
      </FormWrapper>
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

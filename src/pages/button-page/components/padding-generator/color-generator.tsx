import chroma from 'chroma-js';
import { useMemo } from 'react';

interface ColorGeneratorProps {
  baseColor: string;
}

const ColorGenerator = ({
  baseColor,
}: ColorGeneratorProps) => {
  const shades = useMemo(() => {
    if (!chroma.valid(baseColor)) return [];

    // 1. Converter para o espaço de cor para medir luminosidade real
    const color = chroma(baseColor);
    // Lightness perceptiva (L* do LCH)
    const [L] = color.lch(); // 0 (preto) → 100 (branco)

    // Normaliza para 0–1
    const perceptualLightness = L / 100;

    // Mistura perceptual (L*) + luminância real (correção)
    const luminance = color.luminance();

    // Peso final (L* tem mais peso)
    const perceivedDarkness = (1 - perceptualLightness) * 0.75 + (1 - luminance) * 0.25;

    // Converte para escala Tailwind (50–950)
    const rawWeight = perceivedDarkness * 1000;

    // Lista de stops padrão do Tailwind
    const stops = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    // Descobrir qual stop está mais próximo da nossa cor base
    const closestStop = stops.reduce((prev, curr) =>
      Math.abs(curr - rawWeight) < Math.abs(prev - rawWeight) ? curr : prev
    );

    // 3. Gerar a escala baseada em três pontos: [Branco -> Cor Base -> Preto]
    // Isso garante que a sua cor esteja EXATAMENTE no centro da transição
    const scale = chroma
      .scale(['white', baseColor, 'black'])
      .domain([0, closestStop / 1000, 1]) // Define o "pivot" na posição da cor base
      .mode('lch');

    return stops.map((stop) => {
      const isBase = stop === closestStop;
      // Se for o stop mais próximo, usamos a cor original exata para evitar arredondamentos
      const hex = isBase ? color.hex() : scale(stop / 1000).hex();

      return {
        stop,
        hex: hex.toUpperCase(),
        isBase,
        // Detecta se o texto deve ser preto ou branco para contraste
        contrast: chroma(hex).luminance() > 0.2 ? '#000' : '#fff',
      };
    });
  }, [baseColor]);

  return (
    <div>
      <div className="flex flex-wrap rounded-md">
        {shades.map((item) => (
          <div
            key={item.stop}
            className={`h-24 w-28 relative text-left
                pt-[1cap] px-3`}
            style={{
              backgroundColor: item.hex,
              color: item.contrast,
              zIndex: item.isBase ? 2 : 1,
            }}>
            <p className="text-base font-medium max-w-max">{item.stop}</p>
            <p className="text-xs opacity-80 max-w-max">{item.hex}</p>

            {item.isBase && (
              <p
                className={`text-xs font-semibold px-2 py-0.5
                 absolute bottom-0 right-0`}
                style={{
                  color: item.hex,
                  backgroundColor: item.contrast,
                }}>
                Sua cor
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorGenerator;

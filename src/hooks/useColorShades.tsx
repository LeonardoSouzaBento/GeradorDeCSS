import chroma from 'chroma-js';
import { useMemo } from 'react';

export interface ColorShade {
  stop: number;
  hex: string;
  isBase: boolean;
}

export const useColorShades = (baseColor: string) => {
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
    const stops = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000];

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
      const hex = isBase ? color.hex() : scale(stop / 1024).hex();
      return {
        stop,
        hex: hex.toUpperCase(),
        isBase,
      };
    });
  }, [baseColor]);

  const blackColor = shades.find((item) => item.stop === 1000)?.hex;
  const whiteColor = shades.find((item) => item.stop === 50)?.hex;

  return { shades, blackColor, whiteColor };
};

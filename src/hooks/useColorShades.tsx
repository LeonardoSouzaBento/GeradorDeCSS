import chroma from 'chroma-js';
import { useMemo } from 'react';

export interface ColorShade {
  stop: number;
  hex: string;
  isBase: boolean;
  textColor: string;
}

export const useColorShades = (baseColor: string) => {
  const shades = useMemo<ColorShade[]>(() => {
    if (!chroma.valid(baseColor)) return [];

    const color = chroma(baseColor);
    const [L] = color.lch();
    const perceptualLightness = L / 100;
    const luminance = color.luminance();

    const perceivedDarkness =
      (1 - perceptualLightness) * 0.75 + (1 - luminance) * 0.25;

    const rawWeight = perceivedDarkness * 1000;

    const stops = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000];

    const closestStop = stops.reduce((prev, curr) =>
      Math.abs(curr - rawWeight) < Math.abs(prev - rawWeight) ? curr : prev
    );

    const scale = chroma
      .scale(['white', baseColor, 'black'])
      .domain([0, closestStop / 1000, 1])
      .mode('lch');

    // 1️⃣ gera todas as cores
    const baseShades = stops.map((stop) => {
      const isBase = stop === closestStop;
      const hex = isBase ? color.hex() : scale(stop / 1024).hex();

      return {
        stop,
        hex: hex.toUpperCase(),
        isBase,
      };
    });

    // 2️⃣ descobre cores extremas
    const color1000 = baseShades.find((s) => s.stop === 1000)?.hex ?? '#000';
    const color50 = baseShades.find((s) => s.stop === 50)?.hex ?? '#fff';

    // 3️⃣ calcula textColor corretamente
    return baseShades.map((item) => ({
      ...item,
      textColor:
        chroma(item.hex).luminance() > 0.2 ? color1000 : color50,
    }));
  }, [baseColor]);

  const color1000 = shades.find((item) => item.stop === 1000)?.hex;
  const color50 = shades.find((item) => item.stop === 50)?.hex;

  return { shades, color1000, color50 };
};

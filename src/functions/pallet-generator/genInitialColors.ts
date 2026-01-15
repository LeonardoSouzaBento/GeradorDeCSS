import chroma from 'chroma-js';

interface GetHSLParams {
  color: string;
  saturation: number;
  lightness: number;
}

const genHue = (color: string) => chroma(color).hsl();

export function getHSL({ color, saturation, lightness }: GetHSLParams) {
  const [hue] = genHue(color);
  const [h, s, l] = chroma.hsl(hue, saturation / 100, lightness / 100).hsl();
  return `hsl(${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`;
}

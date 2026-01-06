import { removeExcessZerosAndToFix } from '../removeExcessZeros';

export function scaleFontForBody(
  font640: number,
  font1280: number,
  returnType: 'tw' | 'css' = 'tw'
): string {
  const breakpoints = [
    { prefix: '', min: 0 },
    { prefix: 'sm', min: 640 },
    { prefix: 'md', min: 768 },
    { prefix: 'lg', min: 1024 },
    { prefix: 'xl', min: 1280 },
    { prefix: '2xl', min: 1536 },
  ];

  const proportions = [0, 0.5, 0.6, 0.8, 1, 1.2];

  if (returnType === 'css') {
    let result = '';

    breakpoints.forEach((bp, index) => {
      const size = proportions[index] * (font1280 - font640) + font640;

      if (index === 0) {
        result += `font-size: ${removeExcessZerosAndToFix(size)}rem;\n}\n`;
      } else {
        result += `@media (min-width: ${bp.min}px) {\n body{font-size: ${removeExcessZerosAndToFix(size)}rem;}\n}\n`;
      }
    });

    return result.trim();
  } else {
    let result = '';

    breakpoints.forEach((bp, index) => {
      const size = proportions[index] * (font1280 - font640) + font640;
      const formattedSize = removeExcessZerosAndToFix(size);

      result += `${bp.prefix ? bp.prefix + ':' : ''}text-[${formattedSize}rem] `;
    });

    return result.trim();
  }
}

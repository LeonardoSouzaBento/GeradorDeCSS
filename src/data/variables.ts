import { SizeHierarchy, Scale, TagAndCssVar } from '@/data/types';

/* escalas */
export const scales: Scale[] = [
  { name: 'minor-second', value: 1.067 },
  { name: 'major-second', value: 1.125 },
  { name: 'minor-third', value: 1.2 },
  { name: 'major-third', value: 1.25 },
  { name: 'perfect-fourth', value: 1.333 },
  { name: 'augmented-fourth', value: 1.414 },
  { name: 'perfect-fifth', value: 1.5 },
  { name: 'golden-ratio', value: 1.618 },
];

/* tags e classes associadas a seus valores e variáveis */
export const sizes: SizeHierarchy[] = [
  { tagName: '.smaller-text', pow: -2, var: '--text-xs', scale: '' },
  { tagName: '.small-text, label', pow: -1, var: '--text-sm', scale: '' },
  { tagName: `.normal-text, li, input, select, option`, var: '--text-base', ratio: 1, scale: '' },
  { tagName: '.large-text', pow: 1, var: '--text-lg', scale: '' },

  { tagName: 'h6', pow: 1, var: '--text-h6', scale: '' },
  { tagName: 'h5', pow: 2, var: '--text-h5', scale: '' },
  { tagName: 'h4', pow: 3, var: '--text-h4', scale: '' },
  { tagName: 'h3', pow: 4, var: '--text-h3', scale: '' },
  { tagName: 'h2', pow: 5, var: '--text-h2', scale: '' },
  { tagName: 'h1', pow: 6, var: '--text-h1', scale: '' },
  { tagName: '.big-h1', pow: 7, var: '--text-big-h1', scale: '' },

  { tagName: 'button', ratio: 1, var: '--text-button', scale: '' },
  { tagName: '.small-button', ratio: 0.9, var: '--text-sm-button', scale: '' },
  { tagName: '.large-button', ratio: 1.1, var: '--text-lg-button', scale: '' },
];

export const buttonSizes: Record<string, string> = Object.fromEntries(
  sizes
    .filter((item) => item.ratio)
    .map((item) => {
      return [item.tagName, `${item.ratio}em`];
    })
    .filter(Boolean) as [string, string][]
);

/* variaveis para corpo */
export const textClassSizes: Record<string, string> = Object.fromEntries(
  sizes
    .filter((item) => item.var)
    .map((item) => {
      const className = item.var!.replace('--', '');
      return [item.tagName, className];
    })
);

export const defaultCssValues: TagAndCssVar[] = sizes.map((item) => {
  return {
    tagName: item.tagName,
    varName: '',
  };
});

/* variaveis para botões */

export const fixedButtonSizes: Record<string, string> = {
  button: `text-[${buttonSizes.button}]`,
  '.small-button': `text-[${buttonSizes['.small-button']}]`,
  '.large-button': `text-[${buttonSizes['.large-button']}]`,
};

export const cssFixedButtonSizes: Record<string, string> = {
  button: `font-size: ${buttonSizes.button}`,
  '.small-button': `font-size: ${buttonSizes['.small-button']}`,
  '.large-button': `font-size: ${buttonSizes['.large-button']}`,
};

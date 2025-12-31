export const buttonSizes = {
  'Botão pequeno': 0.9,
  'Botão normal': 0.95,
  'Botão grande': 1,
};

export type ButtonsData = {
  name: string;
  relativeSize: number;
  height: number;
  adjustment: string;
};

export const buttonsData: ButtonsData[] = [
  {
    name: 'Botão pequeno',
    relativeSize: 0.9,
    height: 36,
    adjustment: '0',
  },
  {
    name: 'Botão normal',
    relativeSize: 0.95,
    height: 40,
    adjustment: '0',
  },
  {
    name: 'Botão grande',
    relativeSize: 1,
    height: 44,
    adjustment: '0',
  },
];

export const buttonScales = {
  32: [28, 32, 36],
  36: [32, 36, 40],
  40: [36, 40, 44],
  44: [40, 44, 48],
  48: [42, 48, 54],
  52: [46, 52, 58],
  56: [50, 56, 62],
  60: [54, 60, 66],
  64: [56, 64, 72],
};

export interface ColorCombination {
  contrast: string;
  backgroundColor: string;
  color: string;
}

export const buttonColors: ColorCombination[] = [
  {
    contrast: 'low',
    backgroundColor: '#2B7FFF',
    color: '#fff',
  },
  {
    contrast: 'medium',
    backgroundColor: '#2B7FFF',
    color: '#fff',
  },
  {
    contrast: 'high',
    backgroundColor: '#fff',
    color: '#2B7FFF',
  },
];

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

export interface ColorCombination {
  contrast: string;
  backgroundColor: string;
  color: string;
};

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


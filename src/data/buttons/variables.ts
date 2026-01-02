import {
  ALargeSmall,
  AlignVerticalSpaceAround,
  ChartColumnDecreasing,
  Circle,
  LineSquiggle,
  LucideIcon,
  PaintRoller,
  Palette,
  Pill,
  Play,
  RectangleHorizontal,
  Ruler,
  RulerDimensionLine,
  Square,
  TypeOutline,
  Weight
} from 'lucide-react';

export const buttonSizes = {
  'Botão pequeno': 0.9,
  'Botão normal': 0.95,
  'Botão grande': 1,
};

export type ButtonsData = {
  name: string;
  relativeSize: number;
  finalFontSize: number;
  height: number;
  adjustment: number;
};

export const buttonsData: ButtonsData[] = [
  {
    name: 'Botão menor',
    relativeSize: 0.9,
    finalFontSize: 0,
    height: 36,
    adjustment: 0,
  },
  {
    name: 'Botão normal',
    relativeSize: 0.95,
    finalFontSize: 0,
    height: 40,
    adjustment: 0,
  },
  {
    name: 'Botão maior',
    relativeSize: 1,
    finalFontSize: 0,
    height: 44,
    adjustment: 0,
  },
];

export const buttonScales = {
  36: [32, 36, 40],
  40: [36, 40, 44],
  44: [40, 44, 48],
  48: [42, 48, 54],
  52: [46, 52, 58],
  56: [50, 56, 62],
  60: [54, 60, 66],
  64: [56, 64, 72],
};

export const validateButtonHeight = (value: number) => value >= 32 && value <= 72;

export const pxSuggestions = [0.9, 1.1, 1.3, 1.5];
export const outlineSuggestions = [1, 2.0, 2.5, 3.0];

export type NavOptions =
  | 'Alturas'
  | 'Padding X'
  | 'Font-size dos botões'
  | 'Alinhamento'
  | 'Font-size base'
  | 'Peso'
  | 'Outline'
  | 'Cor'
  | 'Paleta'
  | 'Fonte';

interface OptionButtonData {
  name: NavOptions;
  icon: LucideIcon;
}

export const sizeConfigs: OptionButtonData[] = [
  {
    name: 'Alturas',
    icon: ChartColumnDecreasing,
  },
  {
    name: 'Padding X',
    icon: RulerDimensionLine,
  },
  {
    name: 'Alinhamento',
    icon: AlignVerticalSpaceAround,
  },
  {
    name: 'Outline',
    icon: LineSquiggle,
  },
];

export const fontConfigs: OptionButtonData[] = [
  {
    name: 'Fonte',
    icon: TypeOutline,
  },
  {
    name: 'Peso',
    icon: Weight,
  },
  {
    name: 'Font-size base',
    icon: Ruler,
  },
  {
    name: 'Font-size dos botões',
    icon: ALargeSmall,
  },
];

export const colorConfigs: OptionButtonData[] = [
  {
    name: 'Cor',
    icon: PaintRoller,
  },
  {
    name: 'Paleta',
    icon: Palette,
  },
];

export const iconButtons = {
  names: ['Sm', 'Md', 'Lg'],
  icons: [Square, RectangleHorizontal, Play, Circle, Pill],
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

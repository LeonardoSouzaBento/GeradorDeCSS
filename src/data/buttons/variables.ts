import {
  ALargeSmall,
  AlignVerticalSpaceAround,
  ChartColumnDecreasing,
  LineSquiggle,
  LucideIcon,
  PaintRoller,
  Palette,
  Ruler,
  RulerDimensionLine,
  TypeOutline,
  Weight,
} from 'lucide-react';

export const buttonSizes = {
  'Botão pequeno': 0.9,
  'Botão normal': 0.95,
  'Botão grande': 1,
};

export type PaddingTypes = Record<'px' | 'pb' | 'pt' | 'py', string>;

export interface ButtonsData {
  name: string;
  relativeSize: number;
  finalFontSize: number;
  height: number;
  adjustment: number;
  padding: PaddingTypes;
};

export const buttonsData: ButtonsData[] = [
  {
    name: 'Botão menor',
    relativeSize: 0.9,
    height: 36,
    adjustment: 0,
    finalFontSize: 0,
    padding: {
      px: '',
      pb: '',
      pt: '',
      py: '',
    },
  },
  {
    name: 'Botão normal',
    relativeSize: 0.95,
    height: 40,
    adjustment: 0,
    finalFontSize: 0,
    padding: {
      px: '',
      pb: '',
      pt: '',
      py: '',
    },
  },
  {
    name: 'Botão maior',
    relativeSize: 1,
    height: 44,
    adjustment: 0,
    finalFontSize: 0,
    padding: {
      px: '',
      pb: '',
      pt: '',
      py: '',
    },
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
  | 'Pesos'
  | 'Outline'
  | 'Cor'
  | 'Paleta'
  | 'Fonte';

export interface OptionButtonData {
  name: NavOptions;
  icon: LucideIcon;
}

export const optionsReturn = ['variáveis', 'botão', 'lucide icon', 'mui icon'];
export type OptionReturn = 'variáveis' | 'botão' | 'lucide icon' | 'mui icon';

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
    name: 'Pesos',
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

export const defaultIconSizes: string[] = ['0.937em', '0.968em', '1em', '1.033em', '1.067em'];

export const cssButtonPreview = `--text-sm-button: 0.937em;
--text-button: 0.968em;
--text-lg-button: 1em;

--color-primary-50:#F2F3F7;
--color-primary-100:#E4E6EF;
--color-primary-200:#CACEDF;
--color-primary-300:#B0B7CF;
--color-primary-400:#96A0C0;
--color-primary-500:#7C89B0;
--color-primary-600: #6274A1;
--color-primary-700:#465F92;
--color-primary-800:#1F4780/*Sua cor*/;
--color-primary-900:#002D62;
--color-primary-950:#001E50;
--color-primary-1000:#000D3E;

/*Estilos*/
default:
'bg-primary hover:bg-primary/90 text-primary-50',

outline:
'border-2 border-primary text-primary bg-transparent hover:bg-primary-50/50',
  
secondary:
'bg-primary-100 text-primary hover:bg-primary-200',...};

/*Tamanhos*/
size:{
sm:
 'px-[0.9em] py-[0.62713rem] text-sm-button',

default:
 'px-[0.9em] py-[0.73580rem] text-button',

lg:
 'px-[0.9em] py-[0.84375rem] text-lg-button',

outline-sm:
 'px-[0.79955em] py-[0.53622rem] text-sm-button',

outline-default:
 'px-[0.80277em] py-[0.64489rem] text-button',

outline-lg:
 'px-[0.80588em] py-[0.75284rem] text-lg-button',

icon-sm: size-8,
icon: size-8.5,
icon-md: size-9,
icon-button: size-10,
}
`;

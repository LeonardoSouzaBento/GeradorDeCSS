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
  Weight,
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
//xs, sm, md, lg, xl, h6, h5, h4, h3

export const iconReturnFirstPart = `import { LucideIcon } from 'lucide-react';\n
interface IconProps {
  size?: string;
  Icon: LucideIcon;
  className?: string;
}\n`;

export const iconSizesExample = `const iconSizes = {
  xs: '0.937em',
  sm: '0.968em',
  md: '1em',
  lg: '1.033em',
  h6: '1.067em',
  h5: '1.1385em',
  h4: '1.2148em',
  h3: '1.2961em',
};\n`;

export const iconReturnSecondPart = `export const Icon = ({ size, Icon, className }: IconProps) => {\nreturn (\n<Icon size={iconSizes[size || 'md']} strokeWidth={2.6} className={className} />\n);};\n\n/*Exemplo de uso\n<Icon size="sm" Icon={Play} />*/`;

export const iconReturnExample =
  iconReturnFirstPart + '\n' + iconSizesExample + '\n' + iconReturnSecondPart;

export const variablesReturnExample = `/* Botões */
--text-sm-button: 0.93em;
--text-button: 0.97em;
--text-lg-button: 1em;\n
/*Paleta*/
--color-primary: #0b5bcb;
--color-primary-50: #f2f3fc;
--color-primary-100: #e5e6f8;
--color-primary-200: #cbcef2;
--color-primary-300: #b1b6ea;
--color-primary-400: #959fe3;
--color-primary-500: #7789dc;
--color-primary-600: #5573d4;
--color-primary-700: #0b5bcb; /*Sua cor*/
--color-primary-800: #0042ac;
--color-primary-900: #002688;
--color-primary-950: #001a76;
--color-primary-1000: #000b65;
`;

export const buttonStylesExample = `variant: {
default: 'bg-primary hover:bg-primary/90 text-primary-50',
outline:'border-2 border-primary text-primary bg-transparent hover:bg-primary-50/50',  
secondary: 'bg-primary-100 text-primary hover:bg-primary-200',...};\n
size:{
sm: 'h-9 rounded-md px-4 small-button',
default: 'h-10 py-2 text-[0.95em]',
lg: 'h-11 rounded-md px-6 large-text text-[1.00em]',
icon-sm: 'size-8 p-0',
icon: 'size-8.5 p-0',
icon-md: 'size-9.5 p-0',
icon-button: 'size-10 p-0',
},`;

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
  SquareRoundCorner,
  TypeOutline,
  Weight,
} from "lucide-react";

export const buttonSizes = {
  "Botão pequeno": 0.9,
  "Botão normal": 0.95,
  "Botão grande": 1,
};

export type PaddingTypes = Record<"px" | "pb" | "pt" | "py", string>;

export interface ButtonsData {
  name: string;
  relativeSize: number;
  finalFontSize: number;
  height: number;
  adjustment: number;
  padding: PaddingTypes;
}

export const buttonsData: ButtonsData[] = [
  {
    name: "Botão menor",
    relativeSize: 0.9,
    height: 36,
    adjustment: 0,
    finalFontSize: 0,
    padding: {
      px: "",
      pb: "",
      pt: "",
      py: "",
    },
  },
  {
    name: "Botão normal",
    relativeSize: 0.95,
    height: 40,
    adjustment: 0,
    finalFontSize: 0,
    padding: {
      px: "",
      pb: "",
      pt: "",
      py: "",
    },
  },
  {
    name: "Botão maior",
    relativeSize: 1,
    height: 44,
    adjustment: 0,
    finalFontSize: 0,
    padding: {
      px: "",
      pb: "",
      pt: "",
      py: "",
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

export const validateButtonHeight = (value: number) =>
  value >= 32 && value <= 72;

export const pxSuggestions = [0.9, 1.1, 1.3, 1.5];
export const outlineSuggestions = [1, 2.0, 2.5, 3.0];

export type NavOptions =
  | "Alturas"
  | "Padding X"
  | "Font-size dos botões"
  | "Alinhamento"
  | "Font-size base"
  | "Pesos"
  | "Outline"
  | "Cor"
  | "Paleta"
  | "Fonte"
  | "Raio de borda";

export interface OptionButtonData {
  name: NavOptions;
  icon: LucideIcon;
}

export const optionsReturn = ["variáveis", "botão", "lucide icon", "mui icon"];
export type OptionReturn = "variáveis" | "botão" | "lucide icon" | "mui icon";

const sizeConfigs: OptionButtonData[] = [
  {
    name: "Alturas",
    icon: ChartColumnDecreasing,
  },
  {
    name: "Padding X",
    icon: RulerDimensionLine,
  },
  {
    name: "Alinhamento",
    icon: AlignVerticalSpaceAround,
  },
  {
    name: "Outline",
    icon: LineSquiggle,
  },
];

const fontConfigs: OptionButtonData[] = [
  {
    name: "Fonte",
    icon: TypeOutline,
  },
  {
    name: "Pesos",
    icon: Weight,
  },
  {
    name: "Font-size base",
    icon: Ruler,
  },
  {
    name: "Font-size dos botões",
    icon: ALargeSmall,
  },
];

const colorConfigs: OptionButtonData[] = [
  {
    name: "Cor",
    icon: PaintRoller,
  },
  {
    name: "Paleta",
    icon: Palette,
  },
];

const moreConfigOptions = [{ name: "Raio de borda", icon: SquareRoundCorner }];

export const configOptions = [
  {
    name: "Tamanho e outline",
    options: sizeConfigs,
  },
  {
    name: "Cor",
    options: colorConfigs,
  },
  {
    name: "Fonte",
    options: fontConfigs,
  },
  {
    name: "Mais",
    options: moreConfigOptions,
  },
];

export interface ColorCombination {
  contrast: string;
  backgroundColor: string;
  color: string;
}

export const buttonColors: ColorCombination[] = [
  {
    contrast: "low",
    backgroundColor: "#2B7FFF",
    color: "#fff",
  },
  {
    contrast: "medium",
    backgroundColor: "#2B7FFF",
    color: "#fff",
  },
  {
    contrast: "high",
    backgroundColor: "#fff",
    color: "#2B7FFF",
  },
];

export const defaultIconSizes: string[] = [
  "0.937em",
  "0.968em",
  "1em",
  "1.033em",
  "1.067em",
];

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

export const buttonFirstPart = `
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  \`h-fit inline-flex items-center justify-center leading-none box-border gap-2 rounded-[*border-radius*px] transition-all duration-200 disabled:pointer-events-none shrink-0 aria-invalid:ring-destructive/20 aria-invalid:border-destructive relative box-border tracking-wide cursor-pointer capitalize data-w-full:w-full data-option:rounded-full text-left outline-solid outline-0\`,
  {
    variants: {
      variant: {
        default: \`bg-primary-*stop-atual* text-primary-50 hover:bg-primary-*stop-anterior* active:bg-primary-*stop-superior* active:text-primary-50 
        disabled:bg-neutral-300 disabled:text-neutral-500/80 hover:bg-primary-700\`,

        outline: \`bg-transparent text-primary-*stop-atual* border-[*outline-value*px] border-primary-*stop-atual* 
        active:bg-primary-100 disabled:bg-neutral-100 disabled:border-neutral-300 
        disabled:text-neutral-500/75 hover:bg-primary-50\`,

        ghost: \`bg-transparent text-primary-*stop-atual* border-[*ghost-outline*px] border-border/80 
        active:bg-primary-100 disabled:bg-neutral-100 disabled:text-neutral-400 
        disabled:border-none hover:bg-primary-50\`,

        secondary: \`bg-primary-50 text-primary-700 hover:bg-primary-50/66 
        saturate-120 active:bg-primary-100 active:text-primary-800 
        disabled:bg-neutral-100 disabled:text-neutral-400
      \`,

        link: \`text-blue-600 underline-offset-4 hover:underline\`,

        transparent: \`bg-transparent text-neutral-800 hover:bg-primary-50 px-[0.93em]
        disabled:bg-neutral-100 disabled:text-neutral-400\`,

        destructive: \`bg-red-700 text-red-50 hover:bg-red-600 
        active:bg-red-800 \`,
      },
      *size*,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
`;

export const buttonStateStyles = `
type VariantWithState = keyof typeof buttonStatesStyles;
const buttonStatesStyles = {
  default: \`
    active:bg-*stop-superior*
    disabled:bg-neutral-300 disabled:text-neutral-500/80
    hover:*stop-inferior*
    focus:border-3 focus:border-selected-400
  \`,

  outline: \`
    active:bg-primary-100
    disabled:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-500/75
    hover:bg-primary-50
    focus:outline-3 focus:outline-selected-400
  \`,

  ghost: \`
    active:bg-primary-100
    disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none
    hover:bg-primary-50
    focus:outline-3 focus:outline-selected-400 focus:border-primary-600
  \`,

  secondary: \`
    active:bg-primary-200 active:text-primary-950
    disabled:bg-neutral-100 disabled:text-neutral-400
    hover:bg-primary-50
    focus:outline-3 focus:outline-selected-400
  \`,

  destructive: \`bg-red-700 text-red-50 
  hover:bg-red-600 
  focus:outline-3 focus:outline-red-200 
  active:bg-red-800
  \`,
};

function getStateClasses(variant: VariantWithState): string {
  return buttonStatesStyles[variant];
}
`;

export const buttonPaddings = `
const paddings = {
  default: {
    sm: "*1*",
    default: "*1*",
    lg: "*1*",
  },
  outline: {
    sm: "*2*",
    default: "*2*",
    lg: "*2*",
  },
  ghost: {
    sm: "*3*",
    default: "*3*",
    lg: "*3*",
  },
};
`;

export const buttonLastPart =`
type OmitVariant = keyof typeof paddings | 'destructive' | 'secondary';
type OmitSize = keyof typeof paddings.default;
const paddingExptions = {
  variants: ['link', 'transparent'],
  sizes: ['icon', 'icon-sm', 'icon-md', 'icon-lg'],
};

const getPaddings = (variant: OmitVariant, size: OmitSize): string => {
  let padding = '';
  if (!paddingExptions.sizes.includes(size) && !paddingExptions.variants.includes(variant)) {
    if (variant === 'destructive' || variant === 'secondary') {
      padding = paddings.default[size];
    } else {
      padding = paddings[variant][size];
    }
  }
  return padding;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<ButtonRef, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = "default",
      asChild = false,
      selected,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const padding = getPaddings(variant as OmitVariant, size as OmitSize);
    const selectedCSS = selected
      ? 'border-2 border-selected text-primary bg-primary-50/25 hover:bg-card'
      : '';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          selectedCSS,
          padding,
          className,
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
` 

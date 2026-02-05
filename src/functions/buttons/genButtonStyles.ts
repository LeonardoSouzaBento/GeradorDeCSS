import { PaddingTypes } from '@/data/buttons/variables';

const iconVars = ['icon-sm:', 'icon:', 'icon-md:', 'icon-button:'];

const buttonCSS = `globais:\nh-fit flex items-center box-border leading-none!;\n\ndefault:\n'bg-primary hover:bg-primary/90 text-primary-50 disabled:bg-neutral-300 disabled:text-neutral-500/80',\n
outline:\n'border-*value* border-primary text-primary bg-transparent hover:bg-primary-50/50 disabled:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-500/75',\n
ghost:\n'hover:bg-primary-50 border text-primary bg-transparent disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none',\n
secondary:\n'bg-primary-100 text-primary hover:bg-primary-200 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none',...};\n`;

const getPadding = (paddings: PaddingTypes[]): string[] => {
  const values = paddings.map((item) => {
    let value = '';

    if (item.px) {
      value += `px-[${item.px}]`;
    }

    if (item.py) {
      value += ` py-[${item.py}]`;
    } else if (item.pt && item.pb) {
      value += ` pt-[${item.pt}] pb-[${item.pb}]`;
    }

    return value.trim();
  });
  return values;
};

export const genButtonStyles = (
  iconButtonSizes: number[],
  fillPaddings: PaddingTypes[],
  outlinePaddings: PaddingTypes[],
  outlineValue: number
) => {
  const iconHeights = iconButtonSizes.map((item) => {
    const sizeInTw = item / 4;
    const isInteger = Number.isInteger(sizeInTw);
    const endsInHalf = sizeInTw % 1 === 0.5;

    if (isInteger || endsInHalf) {
      return `size-${sizeInTw}`;
    }
    return `size-[${sizeInTw.toFixed(4)}rem]`;
  });

  const iconSizes = iconVars
    .map((item, index) => {
      return `${item} ${iconHeights[index]},\n`;
    })
    .join('')
    .trimEnd();

  const fillPadding = getPadding(fillPaddings);
  const outlinePadding = getPadding(outlinePaddings);
  const buttonStyles = buttonCSS.replace('*value*', outlineValue.toString());

  const sizeStyles = `size:{
sm:\n '${fillPadding[0]} text-sm-button',\n
default:\n '${fillPadding[1]} text-button',\n
lg:\n '${fillPadding[2]} text-lg-button',\n
"outline-sm":\n '${outlinePadding[0]} text-sm-button',\n
"outline-default":\n '${outlinePadding[1]} text-button',\n
"outline-lg":\n '${outlinePadding[2]} text-lg-button',\n
${iconSizes}
}`;

  return `/*Estilos*/\n${buttonStyles}\n/*Tamanhos*/\n${sizeStyles}`;
};

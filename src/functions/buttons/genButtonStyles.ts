import {
  ButtonsData,
  PaddingTypes,
  buttonFirstPart,
  buttonLastPart,
  buttonPaddings,
} from "@/data/buttons/variables";
import type { MainStopColors } from "@/pages/button-page";

export function genButtonPaddingsVar(
  fillPaddings: PaddingTypes[],
  outlinePaddings: PaddingTypes[],
  ghostPaddings: PaddingTypes[]
) {
  const fill = getPadding(fillPaddings);
  const outline = getPadding(outlinePaddings);
  const ghost = getPadding(ghostPaddings);

  let result = buttonPaddings;

  fill.forEach((p) => {
    result = result.replace("*1*", p);
  });
  outline.forEach((p) => {
    result = result.replace("*2*", p);
  });
  ghost.forEach((p) => {
    result = result.replace("*3*", p);
  });

  return result;
}

const iconVars = ["icon-sm:", "icon:", "icon-md:", "icon-button:"];

const getPadding = (paddings: PaddingTypes[]): string[] => {
  const values = paddings.map((item) => {
    let value = "";

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

function getTailwindHeight(height: number, isButton: boolean = false) {
  const sizeInTw = height / 4;
  const isInteger = Number.isInteger(sizeInTw);
  const endsInHalf = sizeInTw % 1 === 0.5;
  if (!isButton) {
    if (isInteger || endsInHalf) {
      return `size-${sizeInTw}`;
    }
    return `size-[${sizeInTw.toFixed(4)}rem]`;
  } else {
    if (isInteger || endsInHalf) {
      return `${sizeInTw}`;
    }
    return `[${sizeInTw.toFixed(4)}rem]`;
  }
}

export const genButtonStyles = (
  iconButtonSizes: number[],
  fillPaddings: PaddingTypes[],
  outlinePaddings: PaddingTypes[],
  ghostPaddings: PaddingTypes[],
  outlineValue: number,
  ghostOutlineValue: number,
  currentButtonsData: ButtonsData[],
  mainStopColors: MainStopColors,
  borderRadius: number
) => {
  const paddings = genButtonPaddingsVar(
    fillPaddings,
    outlinePaddings,
    ghostPaddings
  );
  const buttonsHeights = currentButtonsData.map((item) => {
    return getTailwindHeight(Number(item.height), true);
  });
  const iconHeights = iconButtonSizes.map((item) => {
    return getTailwindHeight(Number(item));
  });
  const iconSizes = iconVars
    .map((item, index) => {
      return `${item} ${iconHeights[index]},\n`;
    })
    .join("")
    .trimEnd();

  const sizeStyles = `size:{
    sm:\n 'text-sm-button ${`min-h-${buttonsHeights[0]}`}',\n
    default:\n 'text-button ${`min-h-${buttonsHeights[1]}`}',\n
    lg:\n 'text-lg-button ${`min-h-${buttonsHeights[2]}`}',\n
    ${iconSizes}
}`;

  const firstPart = buttonFirstPart
    .replace("*outline-value*", outlineValue.toString())
    .replace("*ghost-outline*", ghostOutlineValue.toString())
    .replace("*size*", sizeStyles)
    .replace("*stop-atual*", mainStopColors.base)
    .replace("*stop-atual*", mainStopColors.base)
    .replace("*stop-atual*", mainStopColors.base)
    .replace("*stop-atual*", mainStopColors.base)
    .replace("*stop-anterior*", mainStopColors.less)
    .replace("*stop-superior*", mainStopColors.more)
    .replace("*border-radius*", borderRadius.toString());

  return `${firstPart}\n${paddings}\n${buttonLastPart}`;
};

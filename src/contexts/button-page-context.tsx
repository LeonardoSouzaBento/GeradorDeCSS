import {
  buttonsData,
  defaultIconSizes,
  type ButtonsData,
  type PaddingTypes,
} from "@/data/buttons/variables";
import { BooleanSetter, StateSetter } from "@/data/typography/types";
import { useState } from "react";
import { ButtonPageContext } from ".";

export interface ButtonPageContextType {
  /* valores únicos */
  freezeColors: boolean;
  setFreezeColors: BooleanSetter;
  color: string;
  setColor: StateSetter<string>;

  stopGenerate: boolean;
  setStopGenerate: StateSetter<boolean>;

  currentWeight: number;
  setCurrentWeight: StateSetter<number>;

  initialFontSize: number;
  setInitialFontSize: StateSetter<number>;

  outlineValue: number;
  setOutlineValue: StateSetter<number>;

  ghostOutline: number;
  setGhostOutline: StateSetter<number>;

  paddingX: number;
  setPaddingX: StateSetter<number>;

  scaleValue: number;
  setScaleValue: StateSetter<number>;

  strokeWidth: number;
  setStrokeWidth: StateSetter<number>;

  badContrast: boolean;
  setBadContrast: StateSetter<boolean>;

  colorNickname: string;
  setColorNickname: StateSetter<string>;

  /* escalas e dados compostos */
  iconSizes: string[];
  setIconSizes: StateSetter<string[]>;

  iconButtonSizes: number[];
  setIconButtonSizes: StateSetter<number[]>;

  currentButtonsData: ButtonsData[];
  setCurrentButtonsData: StateSetter<ButtonsData[]>;

  relativeSizeScale: string[];
  setRelativeSizeScale: StateSetter<string[]>;

  fillPaddings: PaddingTypes[];
  setFillPaddings: StateSetter<PaddingTypes[]>;

  outlinePaddings: PaddingTypes[];
  setOutlinePaddings: StateSetter<PaddingTypes[]>;
  
  ghostPaddings: PaddingTypes[];
  setGhostPaddings: StateSetter<PaddingTypes[]>;

  borderRadius: number;
  setBorderRadius: StateSetter<number>;
}

export const ButtonPageProvider = ({ children }: { children: React.ReactNode }) => {
  /* valores únicos */
  const [freezeColors, setFreezeColors] = useState<boolean>(false);
  const [color, setColor] = useState("#1F4780");
  const [stopGenerate, setStopGenerate] = useState<boolean>(true);
  const [currentWeight, setCurrentWeight] = useState(600);
  const [initialFontSize, setInitialFontSize] = useState(17);
  const [outlineValue, setOutlineValue] = useState(2);
  const [ghostOutline, setGhostOutline] = useState(1);
  const [paddingX, setPaddingX] = useState(0.9);
  const [scaleValue, setScaleValue] = useState<number>(1.067);
  const [strokeWidth, setStrokeWidth] = useState<number>(2.6);
  const [badContrast, setBadContrast] = useState<boolean>(false);
  const [colorNickname, setColorNickname] = useState<string>("primary");
  const [borderRadius, setBorderRadius] = useState(0);

  /* escalas e dados compostos */
  const [iconSizes, setIconSizes] = useState<string[]>(defaultIconSizes);

  const [iconButtonSizes, setIconButtonSizes] = useState<number[]>([
    0, 0, 0, 0,
  ]);

  const [currentButtonsData, setCurrentButtonsData] =
    useState<ButtonsData[]>(buttonsData);

  const [relativeSizeScale, setRelativeSizeScale] = useState<string[]>([
    "0.93",
    "0.97",
    "1",
  ]);

  const [fillPaddings, setFillPaddings] = useState<PaddingTypes[]>([
    { px: "", pb: "", pt: "", py: "" },
    { px: "", pb: "", pt: "", py: "" },
    { px: "", pb: "", pt: "", py: "" },
  ]);
  
  const [outlinePaddings, setOutlinePaddings] = useState<PaddingTypes[]>([
    { px: "", pb: "", pt: "", py: "" },
    { px: "", pb: "", pt: "", py: "" },
    { px: "", pb: "", pt: "", py: "" },
  ]);

  const [ghostPaddings, setGhostPaddings] = useState<PaddingTypes[]>([
    { px: "", pb: "", pt: "", py: "" },
    { px: "", pb: "", pt: "", py: "" },
    { px: "", pb: "", pt: "", py: "" },
  ]);
  
  return (
    <ButtonPageContext.Provider
      value={{
        freezeColors,
        setFreezeColors,
        color,
        setColor,
        stopGenerate,
        setStopGenerate,
        currentWeight,
        setCurrentWeight,
        initialFontSize,
        setInitialFontSize,
        outlineValue,
        setOutlineValue,
        ghostOutline,
        setGhostOutline,
        paddingX,
        setPaddingX,
        scaleValue,
        setScaleValue,
        strokeWidth,
        setStrokeWidth,
        badContrast,
        setBadContrast,
        colorNickname,
        setColorNickname,
        iconSizes,
        setIconSizes,
        iconButtonSizes,
        setIconButtonSizes,
        currentButtonsData,
        setCurrentButtonsData,
        relativeSizeScale,
        setRelativeSizeScale,
        fillPaddings,
        setFillPaddings,
        outlinePaddings,
        setOutlinePaddings,
        ghostPaddings,
        setGhostPaddings,
        borderRadius,
        setBorderRadius,
      }}
    >
      {children}
    </ButtonPageContext.Provider>
  );
};

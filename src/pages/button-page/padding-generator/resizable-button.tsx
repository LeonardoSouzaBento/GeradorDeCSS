import { ButtonPageContext } from "@/contexts";
import { PaddingTypes } from "@/data/buttons/variables";
import { StateSetter } from "@/data/typography/types";
import { Sparkles } from "lucide-react";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface DynamicPaddingButtonProps {
  name: string;
  height: number;
  adjustment: number;
  relativeSize: number;
  backgroundColor?: string;
  color50?: string;
  definingPx?: boolean;
  children?: React.ReactNode;
  index: number;
  variant?: "fill" | "outline" | "ghost";
}

function returnPadding(value: number): string {
  return (value / 16).toFixed(5) + "rem";
}

const ResizableButton = ({
  name,
  height,
  adjustment,
  relativeSize,
  color50,
  definingPx = false,
  children,
  index,
  variant = "fill",
}: DynamicPaddingButtonProps) => {
  const {
    initialFontSize,
    currentWeight,
    paddingX: contextPaddingX,
    color,
    outlineValue,
    strokeWidth,
    setFillPaddings,
    setOutlinePaddings,
    setGhostPaddings,
    ghostOutline,
    borderRadius
  } = useContext(ButtonPageContext);

  const isOutline = variant === "outline";
  const isGhost = variant === "ghost";
  const effectiveOutlineValue =
    isGhost || isOutline ? (isGhost ? ghostOutline : outlineValue) : 0;

  // Cálculo do paddingX ajustado se for outline ou ghost
  const effectivePaddingX = useMemo(() => {
    const especifcOutline = isGhost ? ghostOutline : outlineValue;
    if ((isOutline || isGhost) && especifcOutline) {
      const fontSize = relativeSize * initialFontSize;
      const pxInPx = fontSize * contextPaddingX - (4 / 5) * especifcOutline;
      return Number((pxInPx / fontSize).toFixed(5));
    }
    return contextPaddingX;
  }, [
    isOutline,
    isGhost,
    relativeSize,
    initialFontSize,
    contextPaddingX,
    outlineValue,
    ghostOutline,
  ]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [canCorrect, setCanCorrect] = useState<number>(0);
  const [padding, setPadding] = useState<PaddingTypes>({
    px: "",
    pb: "",
    pt: "",
    py: "",
  });

  useLayoutEffect(() => {
    if (!buttonRef.current || definingPx) return;
    buttonRef.current.style.paddingTop = "0px";
    buttonRef.current.style.paddingBottom = "0px";

    const contentHeight = buttonRef.current.getBoundingClientRect().height;

    // Subtrair a borda do cálculo (border-box inclui a borda na altura)
    const borderWidth = effectiveOutlineValue ? effectiveOutlineValue * 2 : 0;
    const adjustedContentHeight = contentHeight - borderWidth;

    const totalSpaceNeeded = height - adjustedContentHeight;
    const basePadding = totalSpaceNeeded > 0 ? totalSpaceNeeded / 2 : 0;
    const pt = Number((basePadding - adjustment).toFixed(5));
    const pb = Number((basePadding + adjustment).toFixed(5));
    
    //evitar bug
    buttonRef.current.style.paddingTop = `${pt}px`;
    buttonRef.current.style.paddingBottom = `${pb}px`;

    setPaddingTop(pt);
    setPaddingBottom(pb);
    // Cria um novo objeto ao invés de mutar a referência
    const paddingValues: PaddingTypes = {
      px: `${effectivePaddingX}em`,
      py: "",
      pt: "",
      pb: "",
    };

    if (pb === pt) {
      paddingValues.py = returnPadding(pb);
    } else {
      paddingValues.pt = returnPadding(pt);
      paddingValues.pb = returnPadding(pb);
    }
    setPadding(paddingValues);

    if (effectiveOutlineValue) {
      setCanCorrect((prev) => prev + 1);
    }
  }, [
    height,
    adjustment,
    relativeSize,
    initialFontSize,
    effectiveOutlineValue,
    effectivePaddingX,
  ]);

  useEffect(() => {
    if (definingPx && buttonRef.current) {
      buttonRef.current.style.paddingTop = "0px";
      buttonRef.current.style.paddingBottom = "0px";
    }
  }, []);

  useEffect(() => {
    if (!effectiveOutlineValue) return;
    const newPaddingBottom = Number(
      (paddingBottom - effectiveOutlineValue).toFixed(5)
    );
    const newPaddingTop = Number(
      (paddingTop - effectiveOutlineValue).toFixed(5)
    );

    setPaddingBottom(newPaddingBottom);
    setPaddingTop(newPaddingTop);

    const paddingValues: PaddingTypes = {
      px: `${effectivePaddingX}em`,
      py: "",
      pt: "",
      pb: "",
    };

    if (newPaddingBottom === newPaddingTop) {
      paddingValues.py = returnPadding(newPaddingBottom);
    } else {
      paddingValues.pb = returnPadding(newPaddingBottom);
      paddingValues.pt = returnPadding(newPaddingTop);
    }
    setPadding(paddingValues);
  }, [canCorrect, effectiveOutlineValue, effectivePaddingX]);

  // Atualizando os paddings de acordo com o variant
  useEffect(() => {
    if (isOutline) {
      if (setOutlinePaddings) {
        setOutlinePaddings((prev) => {
          const updated = [...prev];
          updated[index] = padding;
          return updated;
        });
      }
    } else if (isGhost) {
      if (setGhostPaddings) {
        setGhostPaddings((prev) => {
          const updated = [...prev];
          updated[index] = padding;
          return updated;
        });
      }
    } else {
      if (setFillPaddings) {
        setFillPaddings((prev) => {
          const updated = [...prev];
          updated[index] = padding;
          return updated;
        });
      }
    }
  }, [
    padding,
    index,
    setFillPaddings,
    setOutlinePaddings,
    setGhostPaddings,
    isOutline,
    isGhost,
  ]);

  return (
    <div ref={wrapperRef}>
      <button
        ref={buttonRef}
        style={{
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingInline: `${effectivePaddingX}em`,
          fontSize: `${initialFontSize * relativeSize}px`,
          fontWeight: currentWeight,
          fontFamily: "var(--font-target)",
          backgroundColor:
            effectiveOutlineValue || isGhost ? "transparent" : color,
          color: effectiveOutlineValue || isGhost ? color : color50,
          border: effectiveOutlineValue
            ? `${effectiveOutlineValue}px solid ${isGhost ? "var(--color-border)" : color}`
            : "none",
          borderRadius: `${borderRadius}px`,
        }}
        className={`h-fit flex items-center box-border
          leading-none rounded-xs gap-2`}
      >
        {children}
        <Sparkles size={"1em"} strokeWidth={strokeWidth} />
        {name}
      </button>
    </div>
  );
};

export default ResizableButton;

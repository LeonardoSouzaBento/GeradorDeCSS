import { PaddingTypes } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { Sparkles } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface DynamicPaddingButtonProps {
  name: string;
  height: number;
  adjustment: number;
  relativeSize: number;
  initialFontSize: number;
  currentWeight: number;
  paddingX: number;
  backgroundColor?: string;
  color?: string;
  color50?: string;
  outlineValue?: number;
  definingPx?: boolean;
  children?: React.ReactNode;
  strokeWidth: number;
  index: number;
  setFillPaddings?: StateSetter<PaddingTypes[]>;
  setOutlinePaddings?: StateSetter<PaddingTypes[]>;
}

function returnPadding(value: number): string {
  return (value / 16).toFixed(5) + 'rem';
}

const ResizableButton = ({
  name,
  height,
  adjustment,
  relativeSize,
  initialFontSize,
  currentWeight,
  outlineValue,
  color,
  color50,
  paddingX,
  definingPx = false,
  children,
  strokeWidth = 2.7,
  index,
  setFillPaddings,
  setOutlinePaddings,
}: DynamicPaddingButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [canCorrect, setCanCorrect] = useState<number>(0);
  const [paddings, setPaddings] = useState<PaddingTypes[]>([
    { px: '', pb: '', pt: '', py: '' },
    { px: '', pb: '', pt: '', py: '' },
  ]);

  useLayoutEffect(() => {
    if (!buttonRef.current || definingPx) return;

    buttonRef.current.style.paddingTop = '0px';
    buttonRef.current.style.paddingBottom = '0px';

    const contentHeight = buttonRef.current.getBoundingClientRect().height;

    // Subtrair a borda do cálculo (border-box inclui a borda na altura)
    const borderWidth = outlineValue ? outlineValue * 2 : 0;
    const adjustedContentHeight = contentHeight - borderWidth;

    const totalSpaceNeeded = height - adjustedContentHeight;
    const basePadding = totalSpaceNeeded > 0 ? totalSpaceNeeded / 2 : 0;
    const pt = Number((basePadding - adjustment).toFixed(5));
    const pb = Number((basePadding + adjustment).toFixed(5));
    setPaddingTop(pt);
    setPaddingBottom(pb);
    // Cria um novo objeto ao invés de mutar a referência
    const paddingValues: PaddingTypes = {
      px: `${paddingX}em`,
      py: '',
      pt: '',
      pb: '',
    };

    if (pb === pt) {
      paddingValues.py = returnPadding(pb);
    } else {
      paddingValues.pt = returnPadding(pt);
      paddingValues.pb = returnPadding(pb);
    }
    setPaddings([paddingValues, paddings[1]]);

    if (outlineValue) {
      setCanCorrect((prev) => prev + 1);
    }
  }, [height, adjustment, relativeSize, initialFontSize, outlineValue]);

  useEffect(() => {
    if (definingPx && buttonRef.current) {
      buttonRef.current.style.paddingTop = '0px';
      buttonRef.current.style.paddingBottom = '0px';
    }
  }, []);

  useEffect(() => {
    if (!outlineValue) return;
    const newPaddingBottom = Number((paddingBottom - outlineValue).toFixed(5));
    const newPaddingTop = Number((paddingTop - outlineValue).toFixed(5));

    setPaddingBottom(newPaddingBottom);
    setPaddingTop(newPaddingTop);

    const paddingValues: PaddingTypes = {
      px: `${paddingX}em`,
      py: '',
      pt: '',
      pb: '',
    };

    if (newPaddingBottom === newPaddingTop) {
      paddingValues.py = returnPadding(newPaddingBottom);
    } else {
      paddingValues.pb = returnPadding(newPaddingBottom);
      paddingValues.pt = returnPadding(newPaddingTop);
    }
    const newPaddings = [paddings[0], paddingValues];
    setPaddings(newPaddings);
  }, [canCorrect]);

  useEffect(() => {
    if (outlineValue) {
      setOutlinePaddings((prev) => {
        const updated = [...prev];
        updated[index] = paddings[1];
        return updated;
      });
    } else {
      setFillPaddings((prev) => {
        const updated = [...prev];
        updated[index] = paddings[0];
        return updated;
      });
    }
  }, [paddings, index, setFillPaddings, setOutlinePaddings]);

  return (
    <div ref={wrapperRef}>
      <button
        ref={buttonRef}
        style={{
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingInline: `${paddingX}em`,
          fontSize: `${initialFontSize * relativeSize}px`,
          fontWeight: currentWeight,
          fontFamily: 'var(--font-target)',
          backgroundColor: outlineValue ? 'transparent' : color,
          color: outlineValue ? color : color50,
          border: outlineValue ? `${outlineValue}px solid ${color}` : 'none',
        }}
        className={`h-fit flex items-center box-border
          leading-none rounded-md gap-2`}>
        {children}
        <Sparkles size={'1em'} strokeWidth={strokeWidth} />
        {name}
      </button>
    </div>
  );
};

export default ResizableButton;

import { Pointer } from 'lucide-react';
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
}: DynamicPaddingButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [canCorrect, setCanCorrect] = useState<number>(0);

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

    setPaddingTop(Number((basePadding - adjustment).toFixed(3)));
    setPaddingBottom(Number((basePadding + adjustment).toFixed(3)));
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
    const newPaddingBottom = paddingBottom - outlineValue;
    const newPaddingTop = paddingTop - outlineValue;
    setPaddingBottom(newPaddingBottom);
    setPaddingTop(newPaddingTop);
  }, [canCorrect]);

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
        <Pointer size={'1em'} strokeWidth={2.7}/>
        {name}
      </button>
    </div>
  );
};

export default ResizableButton;

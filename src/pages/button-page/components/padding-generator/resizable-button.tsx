import { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface DynamicPaddingButtonProps {
  name: string;
  height: number;
  adjustment: number;
  backgroundColor?: string;
  color?: string;
  relativeSize: number;
  initialFontSize: number;
  currentWeight: number;
  outlineValue?: number;
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
}: DynamicPaddingButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [setAgain, setSetAgain] = useState<number>(0);

  useLayoutEffect(() => {
    if (!buttonRef.current) return;

    buttonRef.current.style.paddingTop = '0px';
    buttonRef.current.style.paddingBottom = '0px';

    const contentHeight = buttonRef.current.getBoundingClientRect().height;

    const totalSpaceNeeded = height - contentHeight;
    const basePadding = totalSpaceNeeded > 0 ? totalSpaceNeeded / 2 : 0;

    setPaddingTop(Number((basePadding - adjustment).toFixed(3)));
    setPaddingBottom(Number((basePadding + adjustment).toFixed(3)));
  }, [height, adjustment, relativeSize, initialFontSize, outlineValue]);

  return (
    <div ref={wrapperRef}>
      <button
        ref={buttonRef}
        style={{
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          fontSize: `${initialFontSize * relativeSize}px`,
          fontWeight: currentWeight,
          fontFamily: 'var(--font-target)',
          backgroundColor: outlineValue ? 'transparent' : color,
          color: outlineValue ? color : 'white',
          border: outlineValue ? `${outlineValue}px solid ${color}` : 'none',
        }}
        className={`h-fit inline-block box-border
          leading-none text-center rounded-md px-[2ex]`}>
        {name}
      </button>
    </div>
  );
};

export default ResizableButton;

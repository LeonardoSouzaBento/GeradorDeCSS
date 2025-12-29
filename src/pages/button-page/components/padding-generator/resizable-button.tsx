import { useCallback, useEffect, useRef, useState } from 'react';

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

type ButtonPaddingResult = {
  paddingTop: number;
  paddingBottom: number;
};

function generateButtonStyle(
  targetHeight: number,
  contentHeight: number,
  adjustment: number
): ButtonPaddingResult {
  const totalSpaceNeeded = targetHeight - contentHeight;
  const basePadding = totalSpaceNeeded > 0 ? totalSpaceNeeded / 2 : 0;

  return {
    paddingTop: Number((basePadding - adjustment).toFixed(3)),
    paddingBottom: Number((basePadding + adjustment).toFixed(3)),
  };
}

const ResizableButton = ({
  name,
  height,
  adjustment,
  relativeSize,
  initialFontSize,
  currentWeight,
  outlineValue,
}: DynamicPaddingButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);

  const handleResize = () => {
    if (buttonRef.current && wrapperRef.current) {
      buttonRef.current.style.paddingTop = '0px';
      buttonRef.current.style.paddingBottom = '0px';

      const contentHeight = wrapperRef.current.getBoundingClientRect().height;

      const { paddingTop, paddingBottom } = generateButtonStyle(height, contentHeight, adjustment);

      setPaddingTop(paddingTop);
      setPaddingBottom(paddingBottom);
    }
  };

  useEffect(() => {
    handleResize();
  }, [height, adjustment, relativeSize, initialFontSize, currentWeight, outlineValue]);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <div ref={wrapperRef}>
      <button
        ref={buttonRef}
        style={{
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          fontSize: `${initialFontSize * relativeSize}px`,
          fontWeight: currentWeight,
          backgroundColor: outlineValue ? 'transparent' : 'blue',
          color: outlineValue ? 'blue' : 'white',
          border: outlineValue ? `${outlineValue}px solid blue` : 'none',
        }}
        className={`h-fit inline-block box-border
          leading-none text-center rounded-full px-[2ex]`}>
        {name} pt: {paddingTop}px, pb: {paddingBottom}px
      </button>
    </div>
  );
};

export default ResizableButton;

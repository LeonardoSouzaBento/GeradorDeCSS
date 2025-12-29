import { Trash } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { iconXs } from '@/css/lucideIcons';

const DynamicPaddingButton = ({
  height,
  children,
  paddingTop,
  paddingBottom,
  setPaddingTop,
  setPaddingBottom,
  adjustment,
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.paddingTop = '0px';
      buttonRef.current.style.paddingBottom = '0px';

      const rect = buttonRef.current.getBoundingClientRect();
      const contentHeight = rect.height;

      const totalSpaceNeeded = height - contentHeight;
      const basePadding = totalSpaceNeeded > 0 ? totalSpaceNeeded / 2 : 0;

      const finalTop = (basePadding - adjustment).toFixed(5);
      const finalBottom = (basePadding + adjustment).toFixed(5);

      setPaddingTop(finalTop);
      setPaddingBottom(finalBottom);
    }
  }, [height, adjustment, setPaddingTop, setPaddingBottom]);

  const containerStyle = {
    height: `${height}px`,
    boxSizing: 'content-box',
    display: 'inline-block',
    verticalAlign: 'middle',
  };

  const buttonStyle = {
    height: 'fit-content',
    display: 'inline-block',
    paddingTop: `${paddingTop}px`,
    paddingBottom: `${paddingBottom}px`,
    paddingLeft: `${paddingBottom}px`,
    paddingRight: `${paddingBottom}px`,
    boxSizing: 'border-box',
    lineHeight: '1',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '999px',
  };

  return (
    <div style={containerStyle}>
      <button ref={buttonRef} style={buttonStyle}>
        {children}
        {/* <Trash {...iconSm} className={`ml-[1ex]`}/> */}
      </button>
    </div>
  );
};

// --- Exemplo de Implementação com Input Numérico ---

export default function ResizableButton() {
  const [boxHeight, setBoxHeight] = useState(40);
  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [adjustment, setAdjustment] = useState(1.2);

  return (
    <div style={{ padding: '40px' }}>
      <label>Altura da Caixa (px): </label> <br />
      <input
        type="number"
        value={boxHeight}
        onChange={(e) => setBoxHeight(Number(e.target.value))}
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      <br />
      <label>Ajuste (px): </label> <br />
      <input
        type="number"
        min="0"
        max="10"
        step="0.5"
        value={adjustment}
        onChange={(e) => setAdjustment(Number(e.target.value))}
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      <br />
      <DynamicPaddingButton
        height={boxHeight}
        adjustment={adjustment}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        setPaddingTop={setPaddingTop}
        setPaddingBottom={setPaddingBottom}>
        Botão Ajustável Lorem, ipsum dolor sit
        {/* <p style={{ lineHeight: '1', paddingBottom: '3px' }}>Botao Ajustavel</p> */}
      </DynamicPaddingButton>
      <p>Padding Top: {paddingTop}px</p>
      <p>Padding Bottom: {paddingBottom}px</p>
      <button
        className={`flex items-center gap-1.5 pt-[12.30px] pb-[14.7px] px-[12.7px]
         bg-blue-500 text-white rounded-full leading-none box-border`}>
        Teste
        <Trash {...iconXs} />
      </button>
    </div>
  );
}

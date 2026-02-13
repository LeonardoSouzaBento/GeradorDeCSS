import { useEffect, useRef, useState } from 'react';
import { ConfigButton, ConfigOptions, MoveLinesButton } from './collumn-grid/index';
import { StateSetter } from '@/data/typography/types';
import { Button, Icon } from '@/ui';
import { Eye } from 'lucide-react';

type Props = {
  setShow: StateSetter<boolean>;
  show: boolean;
};

function RowGridCore({ show, setShow }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState(12);
  const [gap, setGap] = useState(24);
  const [opacity, setOpacity] = useState(0.3);
  const [color, setColor] = useState('#d71212');
  const [showConfig, setShowConfig] = useState(false);

  // Toggle por tecla
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === ';') {
        setShow((v) => !v);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  if (!show) return null;

  const height = lines * gap;

  return (
    <div>
      <div
        ref={containerRef}
        className="fixed w-full pointer-events-none flex justify-center"
        style={{
          top: 100,
          left: 0,
          height,
        }}>
        {/* linhas */}
        <div
          className="w-full"
          style={{
            height,
            backgroundImage: `repeating-linear-gradient(
                to bottom,
                ${color},
                ${color} 1px,
                transparent 1px,
                transparent ${gap}px
              )`,
            opacity,
          }}
        />
        {/* Move */}
        <MoveLinesButton targetRef={containerRef} />
      </div>
              {/* Config */}
        <ConfigButton
          setShow={setShow}
          onToggleConfig={() => setShowConfig((v) => !v)}
          open={showConfig}
        />
        {showConfig && (
          <ConfigOptions
            lines={lines}
            gap={gap}
            opacity={opacity}
            color={color}
            setLines={setLines}
            setGap={setGap}
            setOpacity={setOpacity}
            setColor={setColor}
          />
        )}
    </div>
  );
}

export function RowGrid() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        style={{ visibility: show ? 'hidden' : 'visible' }}
        onClick={() => setShow((v) => !v)}
        className="fixed bottom-2 right-2 z-50 text-xs bg-white/66 ">
        Mostrar linhas
        <Icon Icon={Eye} />
      </Button>

      <RowGridCore setShow={setShow} show={show} />
    </>
  );
}

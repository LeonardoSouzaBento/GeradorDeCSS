import { Button, Icon } from '@/ui';
import { Move } from 'lucide-react';
import { useRef } from 'react';

export function MoveLinesButton({ targetRef }: { targetRef: React.RefObject<HTMLDivElement> }) {
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  function onMouseDown(e: React.MouseEvent) {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }

  function onMove(e: MouseEvent) {
    if (!dragging.current || !targetRef.current) return;

    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;

    const el = targetRef.current;

    el.style.left = `${el.offsetLeft + dx}px`;
    el.style.top = `${el.offsetTop + dy}px`;

    last.current = { x: e.clientX, y: e.clientY };
  }

  function onUp() {
    dragging.current = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
  }

  return (
    <div
      className="pointer-events-auto absolute left-1/2 top-[44%]
        -translate-x-1/2 -translate-y-1/2">
      <Button
        size="icon-sm"
        data-black
        variant="ghost"
        onMouseDown={onMouseDown}
        className="rounded-full bg-white/75 backdrop-blur-xs">
        <Icon Icon={Move} size="lg" strokeWidth="thin" />
      </Button>
    </div>
  );
}

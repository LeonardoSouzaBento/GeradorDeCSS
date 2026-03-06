import { StateSetter } from '@/data/typography/types';
import { Button, Icon, Separator } from '@/ui';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { MouseEvent } from 'react';

export function ConfigButton({
  onToggleConfig,
  open,
  setShow,
}: {
  open: boolean;
  onToggleConfig: () => void;
  setShow: StateSetter<boolean>;
}) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>, item: number) => {
    if (item === 1) {
      onToggleConfig();
    } else {
      e.stopPropagation();
      setShow((v) => !v);
    }
  };

  return (
    <div
      className="h-10 border pointer-events-auto fixed bottom-2 right-2 bg-white/66 
    shadow-sm flex items-center pl-[0.9em] pr-1">
      <span className="font-medium text-sm-button tracking-wide pr-2">Configurar</span>

      <div className="h-full flex items-center gap-1">
        {[1, 2, 3].map((item) =>
          item !== 2 ? (
            <Button
              variant={'transparent'}
              size="icon-sm"
              data-black
              key={item}
              onClick={(e) => {
                handleClick(e, item);
              }}>
              {item === 1 ? (
                <Icon Icon={open ? ChevronDown : ChevronUp} size={'xl'} strokeWidth="light" />
              ) : (
                <Icon Icon={X} size="sm" className="text-red-600" strokeWidth="light" />
              )}
            </Button>
          ) : (
            <Separator orientation="vertical" />
          ),
        )}
      </div>
    </div>
  );
}

import { StateSetter } from '@/data/typography/types';
import { cn } from '@/lib/utils';
import { Input } from '@/ui';
import { isHexColor } from '@/utils/isHexColor';
import React from 'react';

interface Props {
  color: string;
  setColor: StateSetter<string>;
  cssWrapper?: string;
}

const ColorInput = ({ color, setColor, cssWrapper }: Props) => {
  const [inputValue, setInputValue] = React.useState<string>(color);

  return (
    <div className={cn('grid grid-cols-1 gap-3', cssWrapper)}>
      <Input
        type="text"
        placeholder="#1F4780"
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
          if (isHexColor(value)) {
            setColor(value);
          }
        }}
      />
      <Input
        className="py-1 px-1.5"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export { ColorInput };


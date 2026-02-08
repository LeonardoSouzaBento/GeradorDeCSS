import { StateSetter } from '@/data/typography/types';
import { Input, InputWrapper } from '@/ui';
import { isHexColor } from '@/utils/isHexColor';
import React from 'react';

interface Props {
  color: string;
  setColor: StateSetter<string>;
}

const ColorInput = ({ color, setColor }: Props) => {
  const [inputValue, setInputValue] = React.useState<string>(color);

  return (
    <InputWrapper gap={0} className="space-y-3">
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
      <Input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
    </InputWrapper>
  );
};

export { ColorInput };

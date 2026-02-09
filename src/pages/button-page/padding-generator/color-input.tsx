import { Icon } from '@/ui/lucide-icon';
import { StateSetter } from '@/data/typography/types';
import { H6Title, HeaderH6, Input, FormWrapper, InputWrapper } from '@/ui';
import { isHexColor } from '@/utils/isHexColor';
import { Palette } from 'lucide-react';
import React from 'react';

const ColorInput = ({ color, setColor }: { color: string; setColor: StateSetter<string> }) => {
  const [inputValue, setInputValue] = React.useState<string>(color);

  return (
    <FormWrapper>
      <HeaderH6 mb={1}>
        <H6Title>
          <Icon Icon={Palette} />
          <h6>Cor base</h6>
        </H6Title>
      </HeaderH6>
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
        <Input
          type="color"
          className="py-1 px-1.5"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </InputWrapper>
    </FormWrapper>
  );
};

export default ColorInput;

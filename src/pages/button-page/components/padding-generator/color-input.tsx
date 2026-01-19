import { iconXs } from '@/css/lucideIcons';
import { StateSetter } from '@/data/typography/types';
import { H6Title, HeaderH6, Input, WrapperForm, WrapperInput } from '@/ui';
import { isHexColor } from '@/utils/isHexColor';
import { Palette } from 'lucide-react';
import React from 'react';

const ColorInput = ({ color, setColor }: { color: string; setColor: StateSetter<string> }) => {
  const [inputValue, setInputValue] = React.useState<string>(color);

  return (
    <WrapperForm>
      <HeaderH6 mb={1}>
        <H6Title>
          <Palette {...iconXs} />
          <h6>Cor</h6>
        </H6Title>
      </HeaderH6>
      <WrapperInput gap={0} className="space-y-3">
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
      </WrapperInput>
    </WrapperForm>
  );
};

export default ColorInput;

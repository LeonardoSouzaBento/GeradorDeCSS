import { iconXs } from '@/css/lucideIcons';
import { StateSetter } from '@/data/typography/types';
import { H6Title, HeaderH6, Input, WrapperForm, WrapperInput } from '@/ui';
import { Palette } from 'lucide-react';
import React from 'react';

const ColorInput = ({ color, setColor }: { color: string; setColor: StateSetter<string> }) => {
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
          placeholder="Digite o código de cor"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </WrapperInput>
    </WrapperForm>
  );
};

export default ColorInput;

import { iconXs } from '@/css/lucideIcons';
import { StateSetter } from '@/data/typography/types';
import { HeaderH6, Input, WrapperForm, WrapperInput } from '@/ui';
import { Palette } from 'lucide-react';
import React from 'react';

const ColorInput = ({
  color,
  setColor,
}: {
  color: string;
  setColor: StateSetter<string>;
}) => {
  return (
    <WrapperForm>
      <HeaderH6 title="Cor">
        <Palette {...iconXs} />
      </HeaderH6>
      <WrapperInput>
        <Input
          type="text"
          placeholder="Digite o código de cor"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </WrapperInput>
    </WrapperForm>
  );
};

export default ColorInput;

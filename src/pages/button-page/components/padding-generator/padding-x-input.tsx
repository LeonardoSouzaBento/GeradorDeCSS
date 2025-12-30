import { iconXs } from '@/css/lucideIcons';
import { StateSetter } from '@/data/typography/types';
import { H6Description, H6Title, HeaderH6, WrapperForm, WrapperInput } from '@/ui';
import { Input } from '@/ui/input';
import { RulerDimensionLine } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
  paddingX: string;
  setPaddingX: StateSetter<string>;
}

const PaddingXInput = ({ paddingX, setPaddingX }: Props) => {
  const numericValue = Number(paddingX);
  console.log(numericValue);

  useEffect(() => {
    if (paddingX.includes(',')) {
      setPaddingX(paddingX.replace(',', '.'));
    }
  }, []);

  return (
    <WrapperForm>
      <HeaderH6 mb={1}>
        <H6Title>
          <RulerDimensionLine {...iconXs} />
          <h6>Padding X</h6>
        </H6Title>
        <H6Description>
          <p>Padding horizontal na medida <strong>em</strong></p>
        </H6Description>
      </HeaderH6>

      <WrapperInput>
        <Input
          id="padding-x"
          type="text"
          pattern="[0-9]*"
          value={paddingX}
          onChange={(e) => setPaddingX(e.target.value)}
        />
      </WrapperInput>
    </WrapperForm>
  );
};

export default PaddingXInput;

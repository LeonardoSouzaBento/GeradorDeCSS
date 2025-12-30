import { iconXs } from '@/css/lucideIcons';
import { StateSetter } from '@/data/typography/types';
import { H6Description, H6Title, HeaderH6, Input, WrapperForm, WrapperInput } from '@/ui';
import { LineSquiggle } from 'lucide-react';

const LineThickness = ({
  lineThickness,
  setLineThickness,
}: {
  lineThickness: string;
  setLineThickness: StateSetter<string>;
}) => {
  return (
    <WrapperForm className="sm:mb-0">
      <HeaderH6 mb={1.2} className="mb-[1ex]">
        <H6Title>
          <LineSquiggle {...iconXs} />
          <h6>Espessura da linha</h6>
        </H6Title>
        <H6Description>
          <p>Para botões com bordas</p>
        </H6Description>
      </HeaderH6>
      <WrapperInput>
        <Input
          type="text"
          pattern="[0-9]*"
          placeholder="Digite o valor"
          value={lineThickness}
          onChange={(e) => setLineThickness(e.target.value)}
        />
      </WrapperInput>
    </WrapperForm>
  );
};

export default LineThickness;

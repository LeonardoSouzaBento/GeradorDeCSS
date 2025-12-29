import { iconXs } from '@/css/lucideIcons';
import { StateSetter } from '@/data/typography/types';
import { HeaderH6, Input, WrapperForm, WrapperInput } from '@/ui';
import { LineSquiggle } from 'lucide-react';

const LineThickness = ({
  lineThickness,
  setLineThickness,
}: {
  lineThickness: string;
  setLineThickness: StateSetter<string>;
}) => {
  return (
    <WrapperForm className="xl:mb-0">
      <HeaderH6 title="Espessura da linha" description="Para botões com bordas">
        <LineSquiggle {...iconXs} />
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

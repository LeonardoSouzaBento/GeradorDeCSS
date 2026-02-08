import { iconMd } from '@/css/lucideIcons';
import { Icon } from '@/ui/lucide-icon';
import { StateSetter } from '@/data/typography/types';
import { scales } from '@/data/typography/variables';
import { Button, H6Description, H6Title, HeaderH6, ButtonsWrapper, FormWrapper } from '@/ui/index';
import { ALargeSmall, Link } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface Props {
  scaleValue: number;
  setScaleValue: StateSetter<number>;
}

const FontScales = ({ scaleValue, setScaleValue }: Props) => {
  return (
    <FormWrapper>
      <HeaderH6 mb={0}>
        <H6Title>
          <ALargeSmall {...iconMd} />
          <h6>Escala de crescimento</h6>
        </H6Title>
        <H6Description>
          <p>Selecione a escala de crescimento de texto do seu projeto</p>
        </H6Description>
      </HeaderH6>
      <ButtonsWrapper className="pt-[1cap]">
        {scales.map((item) => (
          <Button
            key={item.value}
            variant="ghost"
            size="sm"
            data-option
            selected={item.value === scaleValue}
            className={`min-w-18`}
            onClick={() => {
              setScaleValue(item.value);
            }}>
            {item.value}
          </Button>
        ))}

        <Button variant="link" size="sm">
          <NavLink to="/typography" className="flex items-center gap-2">
            <Icon Icon={Link} /> Saber mais
          </NavLink>
        </Button>
      </ButtonsWrapper>
    </FormWrapper>
  );
};

export default FontScales;

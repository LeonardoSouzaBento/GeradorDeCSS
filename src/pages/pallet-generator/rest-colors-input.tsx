import { ColorInput } from '@/components/color-input';
import { StateSetter } from '@/data/typography/types';
import {
  Button,
  ButtonsWrapper,
  H6Title,
  HeaderH6,
  Icon,
  Input,
  Label,
  FormWrapper,
  InputWrapper,
} from '@/ui';
import { Settings2, Menu } from 'lucide-react';

const colorNameOptions = ['primary', 'secondary', 'destructive', 'theme'];

interface Props {
  color: string;
  setColor: StateSetter<string>;
  colorPrefix: boolean;
  setColorPrefix: StateSetter<boolean>;
  colorName: string;
  setColorName: StateSetter<string>;
}

const RestColorsInput = ({
  color,
  setColor,
  colorPrefix,
  setColorPrefix,
  colorName,
  setColorName,
}: Props) => {
  return (
    <FormWrapper>
      <HeaderH6 mb={1.5} separator>
        <H6Title>
          <Icon Icon={Settings2} />
          <h6>Preferências</h6>
        </H6Title>
      </HeaderH6>
      <div
        className={`grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] 
        lg:grid-cols-[0.6fr_0.4fr] gap-4`}>
        <InputWrapper className="lg:order-2">
          <Label>Cor base</Label>
          <ColorInput color={color} setColor={setColor} />
        </InputWrapper>
        <InputWrapper className="items-start">
          <Label>Nome da variavel</Label>
          <div className="w-full relative">
            <Input type="text" value={colorName} onChange={(e) => setColorName(e.target.value)} />
            <Button size="icon-sm" className="absolute right-1 top-1" variant="transparent">
              <Icon Icon={Menu} size="lg" />
            </Button>
          </div>
          <Button
            className="normal-case min-w-max justify-start w-full mt-1"
            variant="ghost"
            onClick={() => setColorPrefix(!colorPrefix)}>
            <Input
              className="size-3.75 text-foreground bg-text-foreground"
              type="checkbox"
              checked={colorPrefix}
              onChange={() => setColorPrefix(!colorPrefix)}
            />
            Incluir "color"
          </Button>
        </InputWrapper>
      </div>
    </FormWrapper>
  );
};

export { RestColorsInput };

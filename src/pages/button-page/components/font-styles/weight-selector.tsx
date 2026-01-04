import { iconXs } from '@/css/lucideIcons';
import { IconVariants } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import {
  Button,
  H6Description,
  H6Title,
  HeaderH6,
  Input,
  WrapperButtons,
  WrapperForm,
} from '@/ui/index';
import { Package, Weight } from 'lucide-react';

type Props = {
  currentWeight: number;
  setCurrentWeight: (weight: number) => void;
  iconData: IconVariants;
  setIconData: StateSetter<IconVariants>;
  color: string;
};

const weights = [500, 600, 700];

const WeightSelector = ({
  currentWeight,
  setCurrentWeight,
  iconData,
  setIconData,
  color,
}: Props) => {
  return (
    <div className={`w-full flex-col gap-5 space-y-5`}>
      <WrapperForm className={`w-full`}>
        <HeaderH6 mb={0.5}>
          <H6Title>
            <Weight {...iconXs} />
            <h6>Peso da fonte</h6>
          </H6Title>
        </HeaderH6>
        <WrapperButtons>
          {weights.map((weight) => (
            <Button
              key={weight}
              variant="ghost"
              optionButton
              isSelected={currentWeight === weight}
              onClick={() => {
                setCurrentWeight(weight);
              }}>
              {weight}
            </Button>
          ))}
        </WrapperButtons>
      </WrapperForm>

      <WrapperForm className={`w-full`}>
        <HeaderH6 mb={0.5}>
          <H6Title>
            <Weight {...iconXs} />
            <h6>Peso do ícones</h6>
          </H6Title>
          <H6Description>Harmonize o peso do ícone com o peso da fonte</H6Description>
        </HeaderH6>
        <WrapperButtons>
          {Object.entries(iconData).map(([variant, props]) => (
            <div
              key={variant}
              className={`flex gap-[0.75ex] items-center 
            p-2 rounded-md`}
              style={{ color: color }}>
              <Package {...props} />
              <p style={{ fontSize: props.size, fontWeight: currentWeight }}>Aa</p>
            </div>
          ))}
        </WrapperButtons>
        <Input type="number" step={0.01} min={1} max={5} defaultValue={2.4} />
        {/* <Alert className="mt-1">
          <Icon size="xs" Icon={Info} />
          <AlertDescription className="text-muted-foreground">
            Tenha uma variedade de tamanhos de ícones para escolher caso 1em não seja um valor
            conveniente.{' '}
            <Button variant="link" size="sm">
              Saiba mais
            </Button>
          </AlertDescription>
        </Alert> */}
      </WrapperForm>
    </div>
  );
};

export default WeightSelector;

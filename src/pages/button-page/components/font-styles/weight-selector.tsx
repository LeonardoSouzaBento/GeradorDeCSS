import { iconXs } from '@/css/lucideIcons';
import { Button, HeaderH6, WrapperButtons } from '@/ui/index';
import { Weight } from 'lucide-react';

type Props = {
  currentWeight: number;
  setCurrentWeight: (weight: number) => void;
  styles?: string;
};

const weights = [500, 600, 700];

const WeightSelector = ({ currentWeight, setCurrentWeight, styles }: Props) => {
  return (
    <div className={styles}>
      <HeaderH6 title="Peso">
        <Weight {...iconXs} />
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
    </div>
  );
};

export default WeightSelector;

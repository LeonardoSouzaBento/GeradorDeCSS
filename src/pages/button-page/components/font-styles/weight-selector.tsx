import { iconXs } from '@/css/lucideIcons';
import { Button } from '@/ui/button';
import HeaderH6 from '@/ui/header-h6';
import { Input } from '@/ui/input';
import { WrapperButtons } from '@/ui/wrapper-buttons';
import { Weight } from 'lucide-react';

type Props = {
  currentWeight: number;
  setCurrentWeight: (weight: number) => void;
  styles?: string;
};

const css = {
  weightWrapper: ``,
  wrapperInput: `border rounded-lg p-5 pt-[1.5ex]`,
  button: `w-full h-11 px-[2ex] rounded-md border-2`,
};

const weights = [500, 600, 700];

const WeightSelector = ({ currentWeight, setCurrentWeight, styles }: Props) => {
  return (
    <div className={css.weightWrapper}>
      <div className={styles}>
        <HeaderH6>
          <Weight {...iconXs} /> <h6>Peso</h6>
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
    </div>
  );
};

export default WeightSelector;

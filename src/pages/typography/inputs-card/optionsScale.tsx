import { Button } from '@/ui/button';
import { scales } from '@/data/typography/variables';
import { StateSetter } from '@/data/typography/types';
import { Label } from '@/ui';

interface OptionsScaleProps {
  scaleValue: number;
  setScaleValue: StateSetter<number>;
  setCanGenerate: StateSetter<number>;
}

const OptionsScale = ({ scaleValue, setScaleValue, setCanGenerate }: OptionsScaleProps) => {
  return (
    <div
      className={`flex flex-col gap-[1cap] rounded-none border-b 
        sm:border-b-0 pb-4.5 sm:pb-0`}>
      <Label htmlFor="scale">Escala tipográfica</Label>
      <div
        className={`flex flex-wrap gap-3 rounded-xs 
           text-foreground`}>
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
              setCanGenerate((prev) => prev + 1);
            }}>
            {item.value}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default OptionsScale;

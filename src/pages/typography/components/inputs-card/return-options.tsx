import { StateSetter } from '@/data/typography/types';
import { Label } from '@/ui';
import { Button } from '@/ui/button';
import { useEffect } from 'react';

const options = [
  { name: 'Tailwind', value: 'tw' },
  { name: 'CSS', value: 'CSS' },
];

interface Props {
  returnType: string;
  setReturnType: StateSetter<string>;
  setCanGenerate: StateSetter<number>;
}

const ReturnOptions = ({ returnType, setReturnType, setCanGenerate }: Props) => {
  useEffect(() => {
    setCanGenerate((prev) => prev + 1);
  }, [returnType]);

  return (
    <div className={`flex flex-col gap-[0.95cap] sm:pl-5 sm:border-l border-input`}>
      <Label>Saída</Label>
      <div
        className={`w-full flex justify-start gap-3 sticky bottom-0
          right-0! sm:flex-col sm:max-w-max`}>
        {options.map((option) => (
          <Button
            size="sm"
            variant="ghost"
            key={option.value}
            data-option
            isSelected={returnType === option.value}
            className={`rounded-full shadow-xs`}
            onClick={() => {
              setReturnType(option.value);
            }}>
            {option.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ReturnOptions;

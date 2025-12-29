import { StateSetter } from '@/data/typography/types';
import { useState } from 'react';
import { Button } from './button';

interface GenButtonProps {
  title: string;
  setCanGenerate: StateSetter<number>;
  disabled: boolean;
}

const disableCSS = `opacity-40 grayscale-100 cursor-not-allowed`;
const warnCSS = `text-destructive-foreground bg-destructive!`;

const GenButton = ({ title, setCanGenerate, disabled }: GenButtonProps) => {
  const [warn, setWarn] = useState<string>('');

  const handleClick = () => {
    if (disabled) {
      setWarn('Valores ausentes!');
      setTimeout(() => setWarn(''), 2200);
      return;
    }
    setCanGenerate((prev) => prev + 1);
  };

  return (
    <div>
      {/* {warn && <p className={`w-full text-center ${warnCSS} mb-2`}>{warn}</p>} */}
      <Button
        onClick={handleClick}
        className={`w-full min-h-10 flex-1
            hover:opacity-90 transition-all duration-200 hover:scale-[1.02]
            tracking-normal ${disabled && !warn && disableCSS} ${warn && warnCSS}`}>
        {warn ? 'Valores ausentes!' : title}
      </Button>
    </div>
  );
};

export default GenButton;

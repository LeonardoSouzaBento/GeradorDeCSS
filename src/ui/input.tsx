import * as React from 'react';

import { cn } from '@/lib/utils';
import { iconXs } from '@/css/lucideIcons';
import { SquareChevronDown, SquareChevronUp } from 'lucide-react';
import { StateSetter } from '@/data/typography/types';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'relative flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file: file: file:text-foreground placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

const NumericStep = ({
  step,
  value,
  setValue,
}: {
  step: number;
  value: string;
  setValue: StateSetter<string>;
}) => {
  return (
    <div className={`h-full w-max shrink-0 flex flex-col gap-1 absolute bottom-0 right-0`}>
      <button onClick={() => setValue(String(Number(value) + step))}>
        <SquareChevronUp {...iconXs} />
      </button>
      <button onClick={() => setValue(String(Number(value) - step))}>
        <SquareChevronDown {...iconXs} />
      </button>
    </div>
  );
};

NumericStep.displayName = 'NumericStep';

export { Input, NumericStep };

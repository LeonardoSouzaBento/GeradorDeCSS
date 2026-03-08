import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icon } from '@/ui/lucide-icon';
import { SquareChevronDown, SquareChevronUp } from 'lucide-react';
import { StateSetter } from '@/data/typography/types';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'relative flex h-9 w-full rounded-xs border border-input-border bg-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file: file: file:text-foreground placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-w-max:max-w-max',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
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
        <Icon Icon={SquareChevronUp} />
      </button>
      <button onClick={() => setValue(String(Number(value) - step))}>
        <Icon Icon={SquareChevronDown} />
      </button>
    </div>
  );
};

NumericStep.displayName = 'NumericStep';

export { Input, NumericStep };

import { outputExample } from '@/data/outputExample';
import { secondOutputExample } from '@/data/secondOutputExample';
import { Card } from '@/ui/card';
import { useEffect, useRef, useState } from 'react';

interface Props {
  cardHeight: number;
  output: string;
  secondOutput: string;
  disabled: boolean;
  returnType: string;
  canGenerate: number;
  rootFontSize: number;
}

const Output = ({
  disabled,
  output,
  cardHeight,
  returnType,
  secondOutput,
  canGenerate,
  rootFontSize,
}: Props) => {
  const [animate, setAnimate] = useState<boolean>(false);
  const preRef = useRef<HTMLPreElement>(null);
  const preHeight = (cardHeight / rootFontSize - 3).toFixed(3);

  useEffect(() => {
    if (!preRef.current) return;
    if (preRef.current.scrollTop === 0) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 200);
    }
    preRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [canGenerate, returnType]);

  return (
    <Card
      className={`animate-in fade-in slide-in-from-bottom-4 relative max-h-full 
      space-y-5 pr-5`}
      noHeader
      style={{ height: cardHeight || '22rem' }}>
      <div className={`relative space-y-4`}>
        <div
          className={`absolute top-0 -z-1 left-0 size-full rounded-md bg-transparent 
            transition-all duration-200 ${animate && 'bg-white/66 z-2'}`}
        />
        <pre
          ref={preRef}
          className={`${disabled && 'text-neutral-400'}`}
          style={{ height: `${preHeight}rem` }}>
          <code className="language-css">
            {disabled && returnType === 'tw'
              ? outputExample
              : returnType === 'tw'
                ? output
                : secondOutput || secondOutputExample}
          </code>
        </pre>
      </div>
    </Card>
  );
};

export default Output;

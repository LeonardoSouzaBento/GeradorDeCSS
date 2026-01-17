import Header from '@/components/header';
import { useResizeWatcher } from '@/hooks/useResizeWatcher';
import { ClampValue } from '@/data/typography/types';
import { Card, CardContent } from '@/ui/card';
import { useEffect, useRef, useState } from 'react';
import { useRemObserver } from '@/hooks/useRemObserver';
import { CaseSensitive } from 'lucide-react';
import {
  Prev,
  PersonalGuidelines,
  RelevantQuestions,
  InputsCard,
  Output,
  MoreStylesModal,
  Footer,
} from './components/index';

export default function TypographyPage({ resizingCounter }: { resizingCounter?: number }) {
  /* estados de controle */
  const [returnType, setReturnType] = useState<'tw' | 'css'>('tw');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [canGenerate, setCanGenerate] = useState<number>(0);
  /* estados para saídas */
  const [clampValues, setClampValues] = useState<ClampValue>({});
  const [output, setOutput] = useState<string>('');
  const [secondOutput, setSecondOutput] = useState<string>('');
  const [showMoreStyles, setShowMoreStyles] = useState<boolean>(false);
  /* altura do segundo card */
  const [cardHeight, setCardHeight] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const rootFontSize = useRemObserver();

  useEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (resizingCounter && cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, [resizingCounter]);

  return (
    <div className="min-h-dvh">
      <Header
        title="Gerador de Escala Tipográfica"
        description="Gere o CSS de escala tipográfica do seu projeto"
        className={`flex flex-col sm:flex-row max-w-2xl px-4 sm:px-0 sm:w-[calc(100%-3rem)] text-center pre-sm:flex gap-3.5 justify-center pre-sm:justify-start xl:max-w-7xl`}
        page="typography"
        icon={<CaseSensitive className={`text-white/93`} strokeWidth={2.2} size={'2rem'} />}
        resizingCounter={resizingCounter}
      />
      <main
        className={`main-wrapper
          pb-7 space-y-7 overflow-hidden xl:pb-0 xl:grid
          xl:grid-cols-2 gap-7 relative`}>
        <Card ref={cardRef} className={`w-full h-full max-h-max mx-auto pt-5`}>
          <CardContent className={`flex flex-col gap-5`}>
            <InputsCard
              rootFontSize={rootFontSize}
              output={output}
              secondOutput={secondOutput}
              setOutput={setOutput}
              setSecondOutput={setSecondOutput}
              setClampValues={setClampValues}
              disabled={disabled}
              setDisabled={setDisabled}
              returnType={returnType}
              setReturnType={setReturnType}
              canGenerate={canGenerate}
              setCanGenerate={setCanGenerate}
            />
          </CardContent>
        </Card>
        <Output
          cardHeight={cardHeight}
          output={output}
          secondOutput={secondOutput}
          disabled={disabled}
          returnType={returnType}
          canGenerate={canGenerate}
          rootFontSize={rootFontSize}
        />
      </main>

      <div className={`main-wrapper mb-7`}>
        <Prev clampValues={clampValues} disabled={disabled} />

        <div className={`block space-y-7 xl:grid xl:grid-cols-2 xl:gap-7`}>
          <PersonalGuidelines setShowMoreStyles={setShowMoreStyles} />
          <RelevantQuestions />
        </div>
      </div>
      {showMoreStyles && (
        <MoreStylesModal setShowMoreStyles={setShowMoreStyles} rootFontSize={rootFontSize} />
      )}
      <Footer />
    </div>
  );
}

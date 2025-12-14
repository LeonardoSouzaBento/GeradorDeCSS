import Footer from '@/components/footer';
import Header from '@/components/header';
import InputsCard from '@/components/inputs-card';
import Prev from '@/components/prev';
import PersonalGuidelines from '@/components/prev/personal-guidelines';
import { useResizeWatcher } from '@/hooks/useResizeWatcher';
import { ClampValue } from '@/data/types';
import { Card, CardContent } from '@/ui/card';
import Output from '@/components/output';
import { useEffect, useRef, useState } from 'react';
import MoreStylesModal from '@/components/more-styles-modal';
import { useRemObserver } from '@/hooks/useRemObserver';
import RelevantQuestions from '@/components/relevant-questions';

const mainCss = `h-max px-3 sm:px-6 max-w-2xl xl:max-w-7xl mx-auto box-content`;

const Index = () => {
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
  const [wasResize, setWasResize] = useState<number>();
  const cardRef = useRef<HTMLDivElement>(null);
  useResizeWatcher(setWasResize);
  const rootFontSize = useRemObserver();

  useEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (wasResize && cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, [wasResize]);

  return (
    <div className={`min-h-screen py-8`}>
      <Header />

      <main
        className={`${mainCss}
          pb-7 space-y-7 overflow-hidden xl:pb-0 xl:grid
          xl:grid-cols-2 gap-7 relative`}>
        <Card ref={cardRef} className={`w-full h-full max-h-max mx-auto pt-5`}>
          <CardContent className={`flex flex-col gap-5`}>
            <InputsCard
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

      <div className={`${mainCss} mb-7`}>
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
};

export default Index;

import { Header } from "@/components/common/header";
import { ClampValue } from "@/data/typography/types";
import { useRemObserver } from "@/hooks/useRemObserver";
import { Card, CardContent } from "@/ui/card";
import { CaseSensitive } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Footer,
  InputsCard,
  MoreStylesModal,
  Output,
  PersonalGuidelines,
  Prev,
  RelevantQuestions,
} from "./typography/index";

export default function TypographyPage({
  resizingCounter,
}: {
  resizingCounter?: number;
}) {
  /* estados de controle */
  const [returnType, setReturnType] = useState<"tw" | "css">("tw");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [canGenerate, setCanGenerate] = useState<number>(0);
  /* estados para saídas */
  const [clampValues, setClampValues] = useState<ClampValue>({});
  const [output, setOutput] = useState<string>("");
  const [secondOutput, setSecondOutput] = useState<string>("");
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
        title="Escala Tipográfica"
        description="clamp() · rem · Tailwind e CSS"
        page="typography"
        icon={<CaseSensitive strokeWidth={1.75} className="size-7!" />}
        resizingCounter={resizingCounter}
      />
      <main
        className={`main-wrapper
          pb-7 space-y-7 overflow-hidden xl:pb-0 xl:grid
          xl:grid-cols-2 gap-7 relative`}
      >
        <Card ref={cardRef} className={`w-full h-full max-h-max mx-auto pt-3.5 sm:pt-4`}>
          <CardContent className={`flex flex-col gap-4`}>
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
        <MoreStylesModal
          setShowMoreStyles={setShowMoreStyles}
          rootFontSize={rootFontSize}
        />
      )}
      <Footer />
    </div>
  );
}

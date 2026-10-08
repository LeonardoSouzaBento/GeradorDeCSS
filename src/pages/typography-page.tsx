import { Header } from "@/components/common/header";
import { FontSelector } from "@/components/common/font-selector";
import { ClampValue } from "@/data/typography/types";
import { useRemObserver } from "@/hooks/useRemObserver";
import { Card, CardContent } from "@/ui/card";
import { CaseSensitive } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
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
          grid grid-cols-1 pb-5 sm:pb-6
          xl:grid-cols-2 gap-5 sm:gap-6 relative`}
      >
        <Card ref={cardRef} className={`w-full h-full max-h-max pt-4 sm:pt-5`}>
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
            <div className="border-t pt-2">
              <FontSelector />
            </div>
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

      <div className={`main-wrapper space-y-5 sm:space-y-6 mb-8`}>
        <Prev clampValues={clampValues} disabled={disabled} />

        <div className={`block space-y-5 sm:space-y-6 xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-6`}>
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
    </div>
  );
}

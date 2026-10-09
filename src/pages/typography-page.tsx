import { Header } from "@/components/common/header";
import { FontSelector } from "@/components/common/font-selector";
import { ClampValue } from "@/data/typography/types";
import { useRemObserver } from "@/hooks/useRemObserver";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/ui/card";
import { CaseSensitive, CodeXml, Eye, Scaling, SlidersHorizontal, Type } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  InputsCard,
  MoreStylesModal,
  Output,
  PersonalGuidelines,
  Prev,
  RelevantQuestions,
} from "./typography/index";

type ActiveTab = "configurar" | "codigo" | "previa";
type ConfigSection = "tamanhos" | "fonte";

const tabOptions: { id: ActiveTab; label: string; icon: typeof SlidersHorizontal }[] = [
  { id: "configurar", label: "Configurar", icon: SlidersHorizontal },
  { id: "previa", label: "Prévia", icon: Eye },
  { id: "codigo", label: "Código", icon: CodeXml },
];

const configOptions: { id: ConfigSection; label: string; icon: typeof Scaling }[] = [
  { id: "tamanhos", label: "Tamanhos e saída", icon: Scaling },
  { id: "fonte", label: "Fonte de texto", icon: Type },
];

export default function TypographyPage({
  resizingCounter,
}: {
  resizingCounter?: number;
}) {
  /* estados de controle */
  const [activeTab, setActiveTab] = useState<ActiveTab>("configurar");
  const [configSection, setConfigSection] = useState<ConfigSection>("tamanhos");
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
    if (cardRef.current && cardRef.current.offsetHeight > 0) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, [activeTab, configSection]);

  useEffect(() => {
    if (resizingCounter && cardRef.current && cardRef.current.offsetHeight > 0) {
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

      <div className="main-wrapper mb-4 sm:mb-5">
        <nav className="w-fit max-w-full flex items-center gap-1 overflow-x-auto scrollbar-hidden p-1 bg-secondary rounded-full">
          {tabOptions.map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full small-text transition-colors whitespace-nowrap shrink-0 cursor-pointer",
                  isActive
                    ? "bg-card text-secondary-foreground font-medium shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <TabIcon strokeWidth={2} className="size-5 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <main className="main-wrapper pb-5 sm:pb-6 relative">
        <Card
          ref={cardRef}
          className={cn(
            "w-full h-full max-h-max pt-4 sm:pt-5",
            activeTab !== "configurar" && "hidden"
          )}
        >
          <CardContent className="flex flex-col gap-4">
            <nav className="w-full min-w-0 max-w-full flex items-center gap-1 overflow-x-auto pb-2.5 border-b border-border/50">
              {configOptions.map((opt) => {
                const isActive = configSection === opt.id;
                const OptIcon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setConfigSection(opt.id)}
                    className={cn(
                      "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full small-text transition-colors whitespace-nowrap shrink-0 cursor-pointer",
                      isActive
                        ? "bg-secondary text-secondary-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    <OptIcon strokeWidth={2} className="size-5 shrink-0" />
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className={cn("flex flex-col gap-4", configSection !== "tamanhos" && "hidden")}>
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
            </div>

            <div className={cn(configSection !== "fonte" && "hidden")}>
              <FontSelector />
            </div>
          </CardContent>
        </Card>

        {activeTab === "codigo" && (
          <Output
            cardHeight={cardHeight}
            output={output}
            secondOutput={secondOutput}
            disabled={disabled}
            returnType={returnType}
            canGenerate={canGenerate}
            rootFontSize={rootFontSize}
          />
        )}

        <div className={cn(activeTab !== "previa" && "hidden")}>
          <Prev clampValues={clampValues} disabled={disabled} />
        </div>
      </main>

      <div className="main-wrapper space-y-5 sm:space-y-6 mb-8">
        <div className="block space-y-5 sm:space-y-6 xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-6">
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

import { Header } from '@/components/common/header';
import { useColorShades } from '@/hooks/useColorShades';
import { cn } from '@/lib/utils';
import { Contrast, Palette, SwatchBook } from 'lucide-react';
import { useState } from 'react';
import { ThematicColors } from './pallet-generator/index';
import { NeutralColors } from './pallet-generator/neutral-colors';

type PaletteTab = 'neutras' | 'tematicas';

const paletteTabOptions: { id: PaletteTab; label: string; icon: typeof Contrast }[] = [
  { id: 'neutras', label: 'Cores neutras', icon: Contrast },
  { id: 'tematicas', label: 'Cores temáticas', icon: SwatchBook },
];

export default function PaletteGeneratorPage({
  resizingCounter,
}: {
  resizingCounter?: number;
}) {
  const [activeTab, setActiveTab] = useState<PaletteTab>('neutras');
  const [baseColor, setBaseColor] = useState('#1F4780');
  const { shades } = useColorShades(baseColor);

  return (
    <div className="relative min-h-dvh">
      <Header
        title="Paleta de Cores"
        description="HSL · cores neutras e tons temáticos 50–1000"
        icon={<Palette strokeWidth={2} />}
        resizingCounter={resizingCounter}
      />

      <div className="px-3 sm:px-6 mx-auto max-w-7xl mb-4 sm:mb-5">
        <nav className="w-full min-w-0 max-w-full flex items-center gap-1 overflow-x-auto pb-2.5 border-b border-border/50">
          {paletteTabOptions.map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full small-text transition-colors whitespace-nowrap shrink-0 cursor-pointer',
                  isActive
                    ? 'bg-secondary text-secondary-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60',
                )}
              >
                <TabIcon strokeWidth={2} className="size-5 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <main className="px-3 sm:px-6 mx-auto space-y-5 sm:space-y-6 pb-10 max-w-7xl">
        <div className={cn(activeTab !== 'neutras' && 'hidden')}>
          <NeutralColors baseColor={baseColor} setBaseColor={setBaseColor} shades={shades} />
        </div>
        <div className={cn(activeTab !== 'tematicas' && 'hidden')}>
          <ThematicColors baseColor={baseColor} setBaseColor={setBaseColor} shades={shades} />
        </div>
      </main>
      <div className="dot-pattern-image min-h-screen w-full absolute top-0 left-0 -z-2" />
    </div>
  );
}

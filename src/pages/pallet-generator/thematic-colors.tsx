import { PalletPreview } from '@/components/common/index';
import { ColorShade } from '@/hooks/useColorShades';
import { cn } from '@/lib/utils';
import { Card, H6Title, HeaderH6, Icon } from '@/ui';
import { Eye, NotepadText, Palette, Settings2 } from 'lucide-react';
import { useState } from 'react';
import { GeneratedVars, Preferences } from './thematic-colors/index';

type CardSection = 'preferencias' | 'previa' | 'saida';

const sectionOptions: { id: CardSection; label: string; icon: typeof Settings2 }[] = [
  { id: 'preferencias', label: 'Preferências', icon: Settings2 },
  { id: 'previa', label: 'Prévia', icon: Eye },
  { id: 'saida', label: 'Código', icon: NotepadText },
];

interface Props {
  baseColor: string;
  setBaseColor: (color: string) => void;
  shades: ColorShade[];
}

export const ThematicColors = ({ baseColor, setBaseColor, shades }: Props) => {
  const [activeSection, setActiveSection] = useState<CardSection>('preferencias');
  const [colorPrefix, setColorPrefix] = useState<boolean>(true);
  const [colorName, setColorName] = useState<string>('primary');

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-foreground">
        <Icon Icon={Palette} size="md" className="text-primary" />
        <h3>Cores temáticas</h3>
      </div>

      <Card noHeader className="space-y-4">
        <nav className="w-full min-w-0 max-w-full flex items-center gap-1 overflow-x-auto pb-2.5 border-b border-border/50">
          {sectionOptions.map((opt) => {
            const isActive = activeSection === opt.id;
            const OptIcon = opt.icon;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setActiveSection(opt.id)}
                className={cn(
                  'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full small-text transition-colors whitespace-nowrap shrink-0 cursor-pointer',
                  isActive
                    ? 'bg-secondary text-secondary-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60',
                )}
              >
                <OptIcon strokeWidth={2} className="size-5 shrink-0" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="space-y-4">
          <div className={cn(activeSection !== 'preferencias' && 'hidden')}>
            <Preferences
              color={baseColor}
              setColor={setBaseColor}
              colorPrefix={colorPrefix}
              setColorPrefix={setColorPrefix}
              colorName={colorName}
              setColorName={setColorName}
            />
          </div>

          <div className={cn(activeSection !== 'previa' && 'hidden')}>
            <HeaderH6 mb={1.5}>
              <H6Title>
                <Icon Icon={Eye} />
                <h6>Prévia</h6>
              </H6Title>
            </HeaderH6>
            <PalletPreview shades={shades} cssWrapper={'max-w-max'} />
          </div>

          <div className={cn(activeSection !== 'saida' && 'hidden')}>
            <GeneratedVars shades={shades} colorName={colorName} colorPrefix={colorPrefix} />
          </div>
        </div>
      </Card>
    </div>
  );
};

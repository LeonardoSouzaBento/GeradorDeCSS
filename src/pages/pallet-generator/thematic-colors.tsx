import { PalletPreview } from '@/components/common/index';
import { ColorShade } from '@/hooks/useColorShades';
import { Card, H6Title, HeaderH6, Icon } from '@/ui';
import { Eye, Palette } from 'lucide-react';
import { useState } from 'react';
import { GeneratedVars, Preferences } from './thematic-colors/index';

interface Props {
  baseColor: string;
  setBaseColor: (color: string) => void;
  shades: ColorShade[];
}

export const ThematicColors = ({ baseColor, setBaseColor, shades }: Props) => {
  const [colorPrefix, setColorPrefix] = useState<boolean>(true);
  const [colorName, setColorName] = useState<string>('primary');

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-foreground">
        <Icon Icon={Palette} size="md" className="text-primary" />
        <h3>Cores temáticas</h3>
      </div>

      <Card noHeader className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Preferences
            color={baseColor}
            setColor={setBaseColor}
            colorPrefix={colorPrefix}
            setColorPrefix={setColorPrefix}
            colorName={colorName}
            setColorName={setColorName}
          />
          <div>
            <HeaderH6 mb={1.5}>
              <H6Title>
                <Icon Icon={Eye} />
                <h6>Prévia</h6>
              </H6Title>
            </HeaderH6>
            <PalletPreview shades={shades} cssWrapper={'max-w-max'} />
          </div>
        </div>
        <GeneratedVars shades={shades} colorName={colorName} colorPrefix={colorPrefix} />
      </Card>
    </div>
  );
};

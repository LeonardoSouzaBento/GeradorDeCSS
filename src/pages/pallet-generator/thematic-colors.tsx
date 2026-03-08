import { PalletPreview } from '@/components/common/index';
import { ColorShade } from '@/hooks/useColorShades';
import { Card, CardHeader, CardTitle, H6Title, HeaderH6, Icon } from '@/ui';
import { Eye, Palette } from 'lucide-react';
import { useState } from 'react';
import { GeneratedVars, Preferences } from './thematic-colors/index';
import { Separator } from '@radix-ui/react-separator';

interface Props {
  baseColor: string;
  setBaseColor: (color: string) => void;
  shades: ColorShade[];
}

export const ThematicColors = ({ baseColor, setBaseColor, shades }: Props) => {
  const [colorPrefix, setColorPrefix] = useState<boolean>(true);
  const [colorName, setColorName] = useState<string>('primary');

  return (
    <Card className="space-y-4">
      <CardHeader className="border-none mb-1">
        <CardTitle className="text-primary">
          <Icon Icon={Palette} size="h3" />
          <h3>Cores temáticas</h3>
        </CardTitle>
      </CardHeader>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-5 border-b pb-5">
        <Preferences
          color={baseColor}
          setColor={setBaseColor}
          colorPrefix={colorPrefix}
          setColorPrefix={setColorPrefix}
          colorName={colorName}
          setColorName={setColorName}
        />
        <Separator orientation="vertical" className="max-lg:hidden bg-border" />
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
  );
};

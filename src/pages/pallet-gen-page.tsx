import { Header } from '@/components/common/header';
import { useColorShades } from '@/hooks/useColorShades';
import { Palette } from 'lucide-react';
import { useState } from 'react';
import { ThematicColors } from './pallet-generator/index';
import { NeutralColors } from './pallet-generator/neutral-colors';

export default function PaletteGeneratorPage({
  resizingCounter,
}: {
  resizingCounter?: number;
}) {
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
      <main className="px-3 sm:px-6 mx-auto space-y-5 sm:space-y-6 pb-10 max-w-7xl">
        <NeutralColors baseColor={baseColor} setBaseColor={setBaseColor} shades={shades} />
        <ThematicColors baseColor={baseColor} setBaseColor={setBaseColor} shades={shades} />
      </main>
      <div className="dot-pattern-image min-h-screen w-full absolute top-0 left-0 -z-2" />
    </div>
  );
}

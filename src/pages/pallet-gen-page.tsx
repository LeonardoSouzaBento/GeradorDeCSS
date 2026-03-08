import { useColorShades } from '@/hooks/useColorShades';
import { useState } from 'react';
import { ThematicColors } from './pallet-generator/index';
import { NeutralColors } from './pallet-generator/neutral-colors';

export default function PaletteGeneratorPage() {
  const [baseColor, setBaseColor] = useState('#1F4780');
  const { shades } = useColorShades(baseColor);

  return (
    <div className="relative">
      <main className="px-3 sm:px-4 mx-auto pt-4 space-y-6 pb-6 min-h-dvh max-w-7xl">
        <NeutralColors baseColor={baseColor} setBaseColor={setBaseColor} shades={shades} />
        <ThematicColors baseColor={baseColor} setBaseColor={setBaseColor} shades={shades} />
      </main>
      <div className="dot-pattern-image min-h-screen w-full absolute top-0 left-0 -z-2" />
    </div>
  );
}

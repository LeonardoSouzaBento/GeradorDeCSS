import { ClampValue } from '@/data/types';
import { useResizeWatcher } from '@/hooks/useResizeWatcher';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { useEffect, useRef, useState } from 'react';
import ButtonsSection from './prev/buttons-section';
import FormsSection from './prev/forms-section';
import Nav from './prev/nav';
import ParagraphsSection from './prev/paragraphs-section';
import TitlesSection from './prev/titles-section';
import FontSelector from './font-selector';
import { TriangleAlert } from 'lucide-react';
import { iconXs } from '@/styles/lucideIconStyles';

const css = {
  wrapper: `w-full mb-7 mx-auto`,
  section: `min-h-max space-y-3 box-content bg-background/33 p-5 rounded-md`,
};

export const componentExamples = ['títulos', 'parágrafos', 'botões', 'formulários'];

const Prev = ({ clampValues, disabled }: { clampValues: ClampValue; disabled: boolean }) => {
  const [selectedComponent, setSelectedComponent] = useState<string>('títulos');
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const [firstSectionHeight, setFirstSectionHeight] = useState<string | number>('auto');
  const [wasResize, setWasResize] = useState<number>();
  useResizeWatcher(setWasResize);

  useEffect(() => {
    if (firstSectionRef.current) {
      setFirstSectionHeight(firstSectionRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (firstSectionRef.current) {
      setFirstSectionHeight(firstSectionRef.current.scrollHeight);
    }
  }, [wasResize]);

  return (
    <Card className={css.wrapper}>
      <CardHeader className={`pb-5 mb-4.5`}>
        <CardTitle className={`text-primary`}>Prévia</CardTitle>
        <Nav selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
      </CardHeader>

      {disabled && (
        <Alert className={`mb-4 mt-4 xl:max-w-max`} variant="destructive">
          <TriangleAlert {...iconXs} />
          <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>
            Valores ausentes nos inputs. Sua escala não está sendo aplicada.
          </AlertDescription>
        </Alert>
      )}

      <div className={`xl:flex xl:gap-7`}>
        <CardContent className={`font-target xl:w-4xl`}>
          <section
            className={css.section}
            style={{
              height: firstSectionHeight,
            }}>
            {selectedComponent === 'títulos' && (
              <TitlesSection props={{ ref: firstSectionRef }} clampValues={clampValues} />
            )}
            {selectedComponent === 'parágrafos' && <ParagraphsSection clampValues={clampValues} />}
            {selectedComponent === 'botões' && <ButtonsSection clampValues={clampValues} />}
            {selectedComponent === 'formulários' && <FormsSection clampValues={clampValues} />}
          </section>
        </CardContent>
        <FontSelector />
      </div>
    </Card>
  );
};

export default Prev;

import FontSelector from '@/components/font-selector';
import { Icon } from '@/ui/lucide-icon';
import { ClampValue } from '@/data/typography/types';
import { useResizeWatcher } from '@/hooks/useResizeWatcher';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/ui/index';
import { TriangleAlert } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  ButtonsSection,
  FormsSection,
  Nav,
  ParagraphsSection,
  TitlesSection,
} from './prev/index';

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
      <CardHeader className={`pb-5 mb-4.5 space-y-ex-offset`}>
        <CardTitle className={`text-primary`}>
          <h3>Prévia</h3>
        </CardTitle>
        <Nav selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
      </CardHeader>

      {disabled && (
        <Alert className={`mb-4 mt-4 xl:max-w-max`} variant="destructive">
          <Icon Icon={TriangleAlert} />
          <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>
            Valores ausentes nos inputs. Sua escala não está sendo aplicada.
          </AlertDescription>
        </Alert>
      )}

      <div className={`xl:grid xl:grid-cols-2 xl:gap-7`}>
        <CardContent className={`font-target`}>
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

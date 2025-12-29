import FontSelector from '@/components/font-selector';
import Header from '@/components/header';
import { iconXs } from '@/css/lucideIcons';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { Info, MousePointerClick } from 'lucide-react';
import { useState } from 'react';
import ButtonPrev from './components/font-styles/buttons-prev';
import ColorGenerator from './components/more-styles/color-generator';
import RelativeSizes from './components/font-styles/relative-sizes';
import InitialSize from './components/font-styles/initial-size';
import ResizableButton from './components/more-styles/resizable-button';
import WeightSelector from './components/font-styles/weight-selector';

export const wrapperStyles = 'border rounded-lg p-5 pt-[1.5ex] bg-card';

export default function ButtonPage() {
  const [currentColor, setCurrentColor] = useState('#2B7FFF');
  const [currentWeight, setCurrentWeight] = useState(600);
  const [initialFontSize, setInitialFontSize] = useState(17);
  const [scaleFontSize, setScaleFontSize] = useState([0.9, 0.95, 1]);

  return (
    <div>
      <Header
        page="buttons"
        title="Gerador de estilos para botões"
        description="Estilize seus botões mais rapidamente"
        icon={<MousePointerClick />}
      />
      <main className={`main-wrapper space-y-6 mb-8`}>
        <Card className={`max-h-max`}>
          <CardHeader>
            <CardTitle>Estilos de fonte</CardTitle>
          </CardHeader>
          <CardContent className={`grid grid-cols-1 xl:grid-cols-2 gap-4`}>
            <div className="space-y-5">
              <FontSelector page="button-page" />
              <InitialSize
                styles={wrapperStyles}
                initialFontSize={initialFontSize}
                setInitialFontSize={setInitialFontSize}
              />
              <WeightSelector
                styles={wrapperStyles}
                currentWeight={currentWeight}
                setCurrentWeight={setCurrentWeight}
              />
            </div>
            <div className="space-y-5">
              <RelativeSizes
                styles={wrapperStyles}
                scaleFontSize={scaleFontSize}
                setScaleFontSize={setScaleFontSize}
              />
              <ButtonPrev
                styles={wrapperStyles}
                currentWeight={currentWeight}
                initialFontSize={initialFontSize}
                scaleFontSize={scaleFontSize}
              />
              <Alert className={`mt-5`}>
                <Info {...iconXs} className="warn-icon" />
                <AlertTitle className="text-foreground">Dica</AlertTitle>
                <AlertDescription>
                  Defina o botão normal levemente menor que o corpo do texto do seu app/site.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estilos de botão</CardTitle>
          </CardHeader>
          <CardContent>
            <ResizableButton />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cores recomendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <ColorGenerator baseColor={currentColor} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

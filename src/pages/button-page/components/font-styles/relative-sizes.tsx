import { iconSm, iconXs } from '@/css/lucideIcons';
import { ButtonsData, buttonsData } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { useDebounce } from '@/hooks/useDebounce';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  H6Description,
  H6Title,
  HeaderH6,
  Input,
  Label,
  WrapperForm,
  WrapperInput,
} from '@/ui/index';
import { ALargeSmall, Info } from 'lucide-react';
import { useEffect, useState } from 'react';

const inputs = ['Botão pequeno', 'Botão normal', 'Botão grande'];

interface Props {
  relativeSizeScale: string[];
  setRelativeSizeScale: StateSetter<string[]>;
  setCurrentButtonsData: StateSetter<ButtonsData[]>;
}

const RelativeSizes = ({
  relativeSizeScale,
  setRelativeSizeScale,
  setCurrentButtonsData,
}: Props) => {
  /* debounce para setar dados dos botões */
  const [eventCounter, setEventCounter] = useState(0);
  const canSetButtonData = useDebounce(eventCounter, 300);
  // const [currentIndex, setCurrentIndex] = useState(0);

  const handleScaleFontSizeChange = (index: number, value: string) => {
    const newScale = [...relativeSizeScale];
    newScale[index] = value;
    setRelativeSizeScale(newScale);
  };

  useEffect(() => {
    setEventCounter((prev) => prev + 1);
  }, [relativeSizeScale]);

  useEffect(() => {
    if (!canSetButtonData) return;
    const newButtonsData = buttonsData.map((item, index) => ({
      ...item,
      relativeSize: Number(Number(relativeSizeScale[index].replace(',', '.')).toFixed(2)),
    }));
    setCurrentButtonsData(newButtonsData);
  }, [canSetButtonData]);

  return (
    <WrapperForm className="space-y-[1cap]">
      <HeaderH6 mb={0}>
        <H6Title>
          <ALargeSmall {...iconSm} />
          <h6>Tamanhos relativos</h6>
        </H6Title>
        <H6Description>
          <p>
            Tamanhos na medida <strong>em</strong> (em relação ao tamanho do p normal)
          </p>
        </H6Description>
      </HeaderH6>
      <div className={`flex flex-col gap-3 sm:flex-row sm:justify-between`}>
        {inputs.map((item, index) => (
          <WrapperInput key={item}>
            <Label htmlFor={item}>{item}</Label>
            <Input
              id={item}
              type="text"
              pattern="[0-9]*"
              value={relativeSizeScale[index]}
              onChange={(e) => handleScaleFontSizeChange(index, e.target.value)}
            />
          </WrapperInput>
        ))}
      </div>

      <Alert className={`mt-5`}>
        <Info {...iconXs} className="warn-icon" />
        <AlertTitle className="text-foreground">Dica</AlertTitle>
        <AlertDescription>
          Deixe o botão normal levemente menor que o corpo do texto do seu app/site.
        </AlertDescription>
      </Alert>
    </WrapperForm>
  );
};

export default RelativeSizes;

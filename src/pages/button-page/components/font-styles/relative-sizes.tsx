import { iconSm, iconXs } from '@/css/lucideIcons';
import { ButtonsData, buttonsData } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { useDebounce } from '@/hooks/useDebounce';
import {
  Alert,
  AlertDescription,
  AlertTitle,
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

const RelativeSizes = ({ relativeSizeScale, setRelativeSizeScale, setCurrentButtonsData }: Props) => {
  const handleScaleFontSizeChange = (index: number, value: string) => {
    const newScale = [...relativeSizeScale];
    newScale[index] = value;
    setRelativeSizeScale(newScale);
  };

  /* debounce para setar dados dos botões */
  const [eventCounter, setEventCounter] = useState(0);
  const canSetButtonData = useDebounce(eventCounter, 300);

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
    <WrapperForm>
      <HeaderH6
        title="Tamanhos relativos"
        description="Tamanhos na medida em (em relação ao tamanho do p normal)">
        <ALargeSmall {...iconSm} />
      </HeaderH6>
      <div className={`flex flex-col gap-3 sm:flex-row sm:justify-between pt-[1ex]`}>
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
          Defina o botão normal levemente menor que o corpo do texto do seu app/site.
        </AlertDescription>
      </Alert>
    </WrapperForm>
  );
};

export default RelativeSizes;

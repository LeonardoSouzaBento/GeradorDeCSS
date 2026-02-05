import { cssButtonPreview } from '@/data/buttons/variables';
import { Button, Icon, WrapperButtons, WrapperForm } from '@/ui/index';
import { ClipboardPen, ThumbsUp } from 'lucide-react';

type ButtonData = {
  text: string;
  size: 'default' | 'sm' | 'lg' | 'icon-sm' | 'icon' | 'icon-md' | 'icon-lg';
};

const buttons: ButtonData[] = [
  {
    text: 'Menor',
    size: 'sm',
  },
  {
    text: 'Normal',
    size: 'default',
  },
  {
    text: 'Maior',
    size: 'lg',
  },
];

const iconButtons: ButtonData['size'][] = ['icon-sm', 'icon', 'icon-md', 'icon-lg'];
const iconSzes = ['xs', 'sm', 'md', 'lg'];
const buttonVariantsToRender = [
  { variant: 'default' },
  { variant: 'outline' },
  { variant: 'ghost' },
] as const;

const ButtonsPreview = () => {
  return (
    <WrapperForm>
      <h5>Gerador de estilos para botões</h5>
      <div className="mb-[1cap]">
        <p className="small-text">Defina a escala de botões do seu projeto</p>
        <p className="smaller-text text-muted-foreground">
          Gere paleta de cores e vários estilos para botões rapidamente
        </p>
      </div>
      <div className="space-y-[1ex] pb-4">
        {buttonVariantsToRender.map(({ variant }) => (
          <WrapperButtons key={variant} className="justify-start items-start pb-0.5">
            {buttons.map((button, index) => (
              <Button
                key={`${variant}-${index}`}
                variant={variant}
                size={button.size}
                className={`w-full xs:w-auto`}>
                <Icon
                  Icon={ClipboardPen}
                  size={iconSzes[index]}
                  className="mb-0.25"
                  // strokeValue={'light'}
                />
                {button.text}
              </Button>
            ))}
          </WrapperButtons>
        ))}
        <WrapperButtons className="items-start pb-0.5">
          {iconButtons.map((button, index) => (
            <Button variant="secondary" key={index} size={button} className="rounded-full">
              <Icon Icon={ThumbsUp} size={iconSzes[index]} className="mb-0.5 ml-0.5" />
            </Button>
          ))}
        </WrapperButtons>
      </div>
      <pre className="h-93">{cssButtonPreview}</pre>
    </WrapperForm>
  );
};

export default ButtonsPreview;

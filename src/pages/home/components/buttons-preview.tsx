import { cssButtonPreview } from '@/data/buttons/variables';
import { Button, Icon, WrapperButtons, WrapperForm } from '@/ui/index';
import { ThumbsUp } from 'lucide-react';

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

const ButtonsPreview = () => {
  return (
    <WrapperForm>
      <h3 className="mb-[0.75ex]">Gerador de estilos para botões</h3>

      <div className="mb-[1cap]">
        <p>Defina a escala de botões do seu projeto</p>
        <p className="smaller-text text-muted-foreground">
          Gere paleta de cores e vários estilos para botões <strong>rapidamente</strong>
        </p>
      </div>
      <div className="space-y-[1ex] pb-4">
        <WrapperButtons className="items-start">
          {buttons.map((button, index) => (
            <Button key={index} size={button.size}>
              {button.text}
            </Button>
          ))}
        </WrapperButtons>
        <WrapperButtons className="items-start pb-0.5">
          {buttons.map((button, index) => (
            <Button variant="outline" key={index} size={button.size}>
              {button.text}
            </Button>
          ))}
        </WrapperButtons>
        <WrapperButtons className="items-start pb-0.5">
          {iconButtons.map((button, index) => (
            <Button variant="secondary" key={index} size={button} className="rounded-full">
              <Icon Icon={ThumbsUp} size={iconSzes[index]} className="mb-0.5 ml-0.5" />
            </Button>
          ))}
        </WrapperButtons>
      </div>
      <pre className="h-115.5">{cssButtonPreview}</pre>
    </WrapperForm>
  );
};

export default ButtonsPreview;

import { cssButtonPreview } from '@/data/buttons/variables';
import { Button, ButtonsWrapper, ExpandablePre, Icon } from '@/ui/index';
import { Pencil, ThumbsUp } from 'lucide-react';

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

export const ButtonsDemo = () => {
  return (
    <div className="-mt-px xl:mt-0 min-w-0">
      <div className="mb-[1cap]">
        <p className="small-text text-muted-foreground">
          Estilize rapidamente e veja: fonte, paleta de cor, pesos e muito mais
        </p>
      </div>
      <div className="space-y-3 pb-4">
        <div className="space-y-1.5">
          <p className="small-text text-muted-foreground font-medium">
            Botões de texto
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2.5">
            {buttonVariantsToRender.map(({ variant }) => (
              <div
                key={variant}
                className="flex flex-col gap-3 shrink-0 w-max"
              >
                {buttons.map((button, index) => (
                  <Button
                    key={`${variant}-${index}`}
                    variant={variant}
                    size={button.size}
                    data-demo-size
                    className="w-full whitespace-nowrap rounded-full"
                  >
                    <Icon
                      Icon={Pencil}
                      size={iconSzes[index]}
                      strokeWidth="semibold"
                    />
                    {button.text}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="small-text text-muted-foreground font-medium">
            Botões de ícone
          </p>
          <ButtonsWrapper className="items-start pb-0.5">
            {iconButtons.map((button, index) => (
              <Button variant="secondary" key={index} size={button} className="rounded-full">
                <Icon Icon={ThumbsUp} size={iconSzes[index]} className="mb-0.5 ml-0.5" />
              </Button>
            ))}
          </ButtonsWrapper>
        </div>
      </div>
      <ExpandablePre content={cssButtonPreview} />
    </div>
  );
};

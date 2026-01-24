import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  ButtonVariants,
  Icon,
  WrapperButtons,
  WrapperForm,
} from '@/ui';
import { Info } from 'lucide-react';
import { DownloadButtonPreview } from './download-button-preview';

const buttons: ButtonVariants['variant'][] = [
  'default',
  'outline',
  'ghost',
  'secondary',
  'destructive',
];

const disabledButtons: ButtonVariants['variant'][] = ['default', 'outline', 'ghost', 'secondary'];

const ButtonStyleTester = () => {
  return (
    <div className="space-y-4">
      <Alert data-no-header>
        <Icon Icon={Info} size="xs" />
        <AlertDescription>
          Instale o{' '}
          <a
            href="https://ui.shadcn.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer">
            Shadcn UI
          </a>{' '}
          para usar esse componente.
        </AlertDescription>
      </Alert>
      <WrapperForm className="space-y-4">
        <h6>Pré-visualizador de estilos e estados de botões</h6>
        <div
          className={`flex flex-col gap-3 border-b pb-5
           [&>div]:flex [&>div]:flex-col [&>div]:gap-2`}>
          <div>
            <p>Padrão</p>
            <WrapperButtons>
              {buttons.map((button) => (
                <Button key={button} variant={button as ButtonVariants['variant']}>
                  {button}
                </Button>
              ))}
            </WrapperButtons>
          </div>
          <div>
            <p>Desabiitado</p>
            <WrapperButtons>
              {disabledButtons.map((button) => (
                <Button key={button} variant={button as ButtonVariants['variant']} disabled={true}>
                  {button}
                </Button>
              ))}
            </WrapperButtons>
          </div>
          <div>
            <p>Hover</p>
            <WrapperButtons>
              {buttons.map((button) => (
                <Button key={button} variant={button as ButtonVariants['variant']} data-hover>
                  {button}
                </Button>
              ))}
            </WrapperButtons>
          </div>
          <div>
            <p>Focus</p>
            <WrapperButtons>
              {buttons.map((button) => (
                <Button key={button} variant={button as ButtonVariants['variant']} data-focus>
                  {button}
                </Button>
              ))}
            </WrapperButtons>
          </div>
          <div>
            <p>Active</p>
            <WrapperButtons>
              {buttons.map((button) => (
                <Button key={button} variant={button as ButtonVariants['variant']} data-active>
                  {button}
                </Button>
              ))}
            </WrapperButtons>
          </div>
        </div>
        <DownloadButtonPreview />
        <Alert data-no-header>
          <Icon Icon={Info} size="xs" />
          <AlertDescription>
            Nosso site é <strong>estático e seguro</strong>, fique tranquilo quanto a links
            externos.
          </AlertDescription>
        </Alert>
      </WrapperForm>
    </div>
  );
};

export default ButtonStyleTester;

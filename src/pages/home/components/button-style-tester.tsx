import {
  Alert,
  AlertDescription,
  Button,
  ButtonVariants,
  Icon,
  WrapperButtons,
  WrapperForm
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

type ButtonShowcaseState = {
  name: string;
  props?: Record<string, boolean>;
};

const buttonStates: ButtonShowcaseState[] = [
  { name: 'Padrão' },
  { name: 'Ativo', props: { 'data-active': true } },
  { name: 'Hover', props: { 'data-hover': true } },
  { name: 'Foco', props: { 'data-focus': true } },
  { name: 'Desabilitado', props: { disabled: true } },
];

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
      <WrapperForm className="space-y-2 p-4 pt-3">
        <h6 className='pb-1 border-b'>Pré-visualizador de estilos e estados de botões</h6>
        <div
          className={`flex flex-col gap-3 border-b pb-5
           [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div>div>button]:min-w-34 `}>
          {buttonStates.map(({ name, props }) => (
            <div key={name}>
              <p>{name}</p>
              <WrapperButtons>
                {buttons.map((button) => {
                  if (name === 'Desabilitado' && button === 'destructive') {
                    return null;
                  }
                  return (
                    <Button
                      key={`${name}-${button}`}
                      variant={button as ButtonVariants['variant']}
                      {...props}
                      className='w-full md-sm:w-auto'
                      >
                      {button}
                    </Button>
                  );
                })}
              </WrapperButtons>
            </div>
          ))}
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

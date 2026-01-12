import { Button, ButtonVariants, WrapperButtons } from '@/ui';

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
    <div className="flex flex-col gap-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-2">
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
            <Button key={button} variant={button as ButtonVariants['variant']} data-test-hover>
              {button}
            </Button>
          ))}
        </WrapperButtons>
      </div>
      <div>
        <p>Focus</p>
        <WrapperButtons>
          {buttons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} data-test-focus>
              {button}
            </Button>
          ))}
        </WrapperButtons>
      </div>
      <div>
        <p>Active</p>
        <WrapperButtons>
          {buttons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} data-test-active>
              {button}
            </Button>
          ))}
        </WrapperButtons>
      </div>
    </div>
  );
};

export default ButtonStyleTester;

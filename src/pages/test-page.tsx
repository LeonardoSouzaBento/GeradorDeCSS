import { Button, ButtonVariants, Card, ButtonsWrapper } from '@/ui';

const buttons: ButtonVariants['variant'][] = [
  'default',
  'outline',
  'ghost',
  'secondary',
  'destructive',
];

const disabledButtons: ButtonVariants['variant'][] = ['default', 'outline', 'ghost', 'secondary'];

const TestPage = () => {
  return (
    <Card noHeader className="space-y-4 [&>div]:space-y-1">
      <div>
        <p>Padrão</p>
        <ButtonsWrapper>
          {disabledButtons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']}>
              {button}
            </Button>
          ))}
        </ButtonsWrapper>
      </div>
      <div>
        <p>Desabiitado</p>
        <ButtonsWrapper>
          {disabledButtons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} disabled={true}>
              {button}
            </Button>
          ))}
        </ButtonsWrapper>
      </div>
      <div>
        <p>Hover</p>
        <ButtonsWrapper>
          {buttons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} data-test-hover>
              {button}
            </Button>
          ))}
        </ButtonsWrapper>
      </div>
      <div>
        <p>Focus</p>
        <ButtonsWrapper>
          {buttons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} data-test-focus>
              {button}
            </Button>
          ))}
        </ButtonsWrapper>
      </div>
      <div>
        <p>Active</p>
        <ButtonsWrapper>
          {buttons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} data-test-active>
              {button}
            </Button>
          ))}
        </ButtonsWrapper>
      </div>
    </Card>
  );
};

export default TestPage;

import { cssButtonPreview } from '@/data/buttons/variables';
import { WrapperButtons, WrapperForm } from '@/ui/index';

const buttons = [
  {
    classes: 'h-9 small-button',
    text: 'Menor',
  },
  {
    classes: 'h-10',
    text: 'Normal',
  },
  {
    classes: 'h-11 large-button',
    text: 'Maior',
  },
];

const defaultButtonClasses = 'rounded-md box-border px-[1.1em]';

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
            <button
              key={index}
              className={`${button.classes} ${defaultButtonClasses} text-primary border-2 border-primary`}>
              {button.text}
            </button>
          ))}
        </WrapperButtons>
        <WrapperButtons className="items-start pb-0.5">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`${button.classes} ${defaultButtonClasses} text-primary-50 bg-primary`}>
              {button.text}
            </button>
          ))}
        </WrapperButtons>
      </div>
      <pre className="h-115.5">{cssButtonPreview}</pre>
    </WrapperForm>
  );
};

export default ButtonsPreview;

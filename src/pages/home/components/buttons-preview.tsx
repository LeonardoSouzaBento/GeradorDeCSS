import { cssButtonPreview } from "@/data/buttons/variables";
import { Button, WrapperButtons, WrapperForm } from "@/ui/index";

type ButtonData = {
  text: string;
  size:
    | "default"
    | "sm"
    | "lg"
    | "icon-sm"
    | "icon"
    | "icon-md"
    | "icon-button";
};

const buttons: ButtonData[] = [
  {
    text: "Menor",
    size: "sm",
  },
  {
    text: "Normal",
    size: "default",
  },
  {
    text: "Maior",
    size: "lg",
  },
];

const defaultButtonClasses = "rounded-md box-border px-[1.1em]";

const ButtonsPreview = () => {
  return (
    <WrapperForm>
      <h3 className="mb-[0.75ex]">Gerador de estilos para botões</h3>

      <div className="mb-[1cap]">
        <p>Defina a escala de botões do seu projeto</p>
        <p className="smaller-text text-muted-foreground">
          Gere paleta de cores e vários estilos para botões{" "}
          <strong>rapidamente</strong>
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
      </div>
      <pre className="h-115.5">{cssButtonPreview}</pre>
    </WrapperForm>
  );
};

export default ButtonsPreview;

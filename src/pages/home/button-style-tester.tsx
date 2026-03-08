import {
  Alert,
  AlertDescription,
  Button,
  ButtonVariants,
  Icon,
  ButtonsWrapper,
  FormWrapper,
  AlertTitle,
} from "@/ui";
import { Info } from "lucide-react";
import { DownloadButtonPreview } from "./download-button-preview";

const buttons: ButtonVariants["variant"][] = [
  "default",
  "outline",
  "ghost",
  "secondary",
  "destructive",
];

type ButtonShowcaseState = {
  name: string;
  props?: Record<string, boolean>;
};

const buttonStates: ButtonShowcaseState[] = [
  { name: "Padrão" },
  { name: "Ativo", props: { "data-active": true } },
  { name: "Hover", props: { "data-hover": true } },
  { name: "Foco", props: { "data-focus": true } },
  { name: "Desabilitado", props: { disabled: true } },
];

const ButtonStyleTester = ({ title = true }: { title?: boolean }) => {
  return (
    <div className="space-y-4">
      <FormWrapper className="space-y-2 border-none">
        <h6 className={`pb-1 border-b ${title ? "" : "hidden"}`}>
          Pré-visualizador de estilos e estados de botões
        </h6>
        <div
          className={`flex flex-col gap-3 pb-4
           [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div>div>button]:min-w-34 `}
        >
          {buttonStates.map(({ name, props }) => (
            <div key={name}>
              <p>{name}</p>
              <ButtonsWrapper>
                {buttons.map((button) => {
                  if (name === "Desabilitado" && button === "destructive") {
                    return null;
                  }
                  return (
                    <Button
                      key={`${name}-${button}`}
                      variant={button as ButtonVariants["variant"]}
                      {...props}
                      className="w-full md-sm:w-auto rounded-full"
                    >
                      {button}
                    </Button>
                  );
                })}
              </ButtonsWrapper>
            </div>
          ))}
        </div>
        <DownloadButtonPreview />
        <p className="smaller-text text-muted-foreground text-center">
          Download <strong>seguro</strong>. Nosso site é estático.
        </p>
        <Alert data-no-title>
          <Icon Icon={Info} size="sm" strokeWidth="extrabold" fill="white" />
          <AlertTitle>Importante</AlertTitle>
          <AlertDescription>
            Instale o{" "}
            <a
              href="https://ui.shadcn.com/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shadcn UI
            </a>{" "}
            e o{" "}
            <a
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>{" "}
            para usar esse componente. <br />
          </AlertDescription>
        </Alert>
      </FormWrapper>
    </div>
  );
};

export default ButtonStyleTester;

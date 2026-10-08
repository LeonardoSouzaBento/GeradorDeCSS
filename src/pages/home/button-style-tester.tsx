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
    <div className="space-y-4 w-full min-w-0">
      <FormWrapper className="space-y-3 border-none bg-transparent w-full min-w-0">
        <h6 className={`${title ? "" : "hidden"}`}>
          Pré-visualizador de estilos e estados de botões
        </h6>
        <DownloadButtonPreview />
        <div className="flex gap-3 overflow-x-auto pb-3 pt-1">
          {buttonStates.map(({ name, props }) => (
            <div
              key={name}
              className="flex flex-col gap-2 shrink-0 w-max"
            >
              <p className="small-text text-muted-foreground font-medium">{name}</p>
              <div className="flex flex-col gap-3">
                {buttons.map((button) => {
                  if (name === "Desabilitado" && button === "destructive") {
                    return null;
                  }
                  return (
                    <Button
                      key={`${name}-${button}`}
                      variant={button as ButtonVariants["variant"]}
                      {...props}
                      className="w-full whitespace-nowrap rounded-full"
                    >
                      {button}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <Alert data-no-title className="bg-transparent">
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

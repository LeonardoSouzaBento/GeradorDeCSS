import { ClampValue } from "@/data/types";

const buttonConfigs = [
  {
    text: "Botão Pequeno",
    sizeKey: ".small-button",
    styles: "h-8 py-0 font-medium",
    className: "small-button",
  },
  {
    text: "Botão Normal",
    sizeKey: "button",
    styles: "h-10 font-semibold",
    className: "",
  },
  {
    text: "Botão Grande",
    sizeKey: ".large-button",
    styles: "h-12 font-bold",
    className: "large-button",
  },
];

const css = {
  wrapper: `flex gap-3`,
  button: `bg-primary text-primary-foreground px-5 
  rounded-full max-w-max text-muted-foreground`,
};

const ButtonsSection = ({ clampValues }: { clampValues: ClampValue }) => {
  return (
    <>
      <div className={css.wrapper}>
        {buttonConfigs.map((config) => (
          <button
            className={`flex items-center ${config.styles} ${css.button} ${config.className}`}
            key={config.sizeKey}
            style={{ fontSize: clampValues[config.sizeKey] }}
          >
            {config.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsSection;

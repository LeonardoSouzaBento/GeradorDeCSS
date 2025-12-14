import { ClampValue } from "@/data/types";
import { Input } from "@/ui/input";

const css = {
  form: `h-[calc(100%-3rem)] p-5 pt-4 mt-5 overflow-y-scroll rounded-md border 
  border-border! space-y-4`,
  wrapperInput: `flex flex-col gap-2`,
};

const FormsSection = ({ clampValues }: { clampValues: ClampValue }) => {
  return (
    <>
      <form className={css.form}>
        <div
          className={`flex flex-col gap-4 sm:flex-row sm:gap-4 border-b pb-6`}
        >
          <div className={css.wrapperInput}>
            <label
              htmlFor="nome"
              style={{ fontSize: clampValues[".small-text, label"] }}
            >
              Nome
            </label>
            <Input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              style={{ fontSize: clampValues[".normal-text"] }}
            />
          </div>
          <div className={css.wrapperInput}>
            <label
              htmlFor="email"
              style={{ fontSize: clampValues[".small-text, label"] }}
            >
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="email@exemplo.com"
              style={{ fontSize: clampValues[".normal-text"] }}
            />
          </div>
        </div>

        <div className={css.wrapperInput}>
          <label
            htmlFor="assunto"
            style={{ fontSize: clampValues[".small-text, label"] }}
          >
            Assunto
          </label>
          <select
            id="assunto"
            className={`h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
            style={{ fontSize: clampValues[".normal-text"] }}
          >
            <option style={{ fontSize: clampValues[".small-button"] }}>
              Suporte
            </option>
            <option style={{ fontSize: clampValues[".small-button"] }}>
              Feedback
            </option>
            <option style={{ fontSize: clampValues[".small-button"] }}>
              Outros
            </option>
          </select>
        </div>

        <div className={css.wrapperInput}>
          <label
            htmlFor="mensagem"
            style={{ fontSize: clampValues[".small-text, label"] }}
          >
            Mensagem
          </label>
          <textarea
            style={{ fontSize: clampValues[".normal-text"] }}
            id="mensagem"
            rows={4}
            placeholder="Digite sua mensagem"
          />
        </div>
      </form>
    </>
  );
};

export default FormsSection;

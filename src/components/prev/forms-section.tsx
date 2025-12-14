import { ClampValue } from "@/data/types";
import { Input } from "@/ui/input";

const css = {
  form: `h-[calc(100%-3rem)] p-5 pt-4 overflow-y-scroll rounded-md border 
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
            <label htmlFor="nome">Nome</label>
            <Input id="nome" type="text" placeholder="Digite seu nome" />
          </div>
          <div className={css.wrapperInput}>
            <label htmlFor="email">E-mail</label>
            <Input id="email" type="email" placeholder="email@exemplo.com" />
          </div>
        </div>

        <div className={css.wrapperInput}>
          <label htmlFor="assunto">Assunto</label>
          <select
            id="assunto"
            className={`h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <option>Suporte</option>
            <option>Feedback</option>
            <option>Outros</option>
          </select>
        </div>

        <div className={css.wrapperInput}>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" rows={4} placeholder="Digite sua mensagem" />
        </div>
      </form>
    </>
  );
};

export default FormsSection;

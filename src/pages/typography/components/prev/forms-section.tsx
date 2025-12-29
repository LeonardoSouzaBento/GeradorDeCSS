import { ClampValue } from '@/data/typography/types';
import { Input } from '@/ui/input';
import { findKey } from '@/functions/findKey';

const normalText = findKey('--text-base');
const smallText = findKey('--text-sm-');
const smallButton = findKey('--text-sm-button');

const css = {
  form: `p-5 pt-4 overflow-y-scroll rounded-md border bg-white 
  border-border! space-y-4`,
  wrapperInput: `flex flex-col gap-2`,
};

const FormsSection = ({ clampValues }: { clampValues: ClampValue }) => {
  return (
    <>
      <form className={css.form}>
        <div className={`flex flex-col gap-4 sm:flex-row sm:gap-4 border-b pb-6`}>
          <div className={css.wrapperInput}>
            <label htmlFor="nome" style={{ fontSize: clampValues[smallText] }}>
              Nome
            </label>
            <Input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              style={{ fontSize: clampValues[normalText] }}
            />
          </div>
          <div className={css.wrapperInput}>
            <label htmlFor="email" style={{ fontSize: clampValues[smallText] }}>
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="email@exemplo.com"
              style={{ fontSize: clampValues[normalText] }}
            />
          </div>
        </div>

        <div className={css.wrapperInput}>
          <label htmlFor="assunto" style={{ fontSize: clampValues[smallText] }}>
            Assunto
          </label>
          <select
            id="assunto"
            className={`h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
            style={{ fontSize: clampValues[normalText] }}>
            <option style={{ fontSize: clampValues[smallButton] }}>Suporte</option>
            <option style={{ fontSize: clampValues[smallButton] }}>Feedback</option>
            <option style={{ fontSize: clampValues[smallButton] }}>Outros</option>
          </select>
        </div>

        <div className={css.wrapperInput}>
          <label htmlFor="mensagem" style={{ fontSize: clampValues[smallText] }}>
            Mensagem
          </label>
          <textarea
            style={{ fontSize: clampValues[normalText] }}
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

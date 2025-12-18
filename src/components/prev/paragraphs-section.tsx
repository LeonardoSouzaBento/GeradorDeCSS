import { ClampValue } from '@/data/types';

const ParagraphsSection = ({ clampValues }: { clampValues: ClampValue }) => {
  return (
    <>
      <p className={`large-text`} style={{ fontSize: clampValues['.large-text'] }}>
        Parágrafo Grande — ideal para introduções, heros ou destaque moderado.
      </p>
      <p
        className={`.normal-text, li, input, select, option`}
        style={{ fontSize: clampValues['.normal-text'] }}>
        Parágrafo Padrão — usado para leitura contínua. <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ea cumque dolor nam voluptas
        tempora dolorum, aliquam incidunt mollitia iste, sunt temporibus dolores repudiandae,
        explicabo possimus maxime soluta modi debitis?
      </p>
      <p className={`small-text`} style={{ fontSize: clampValues['.small-text, label'] }}>
        Parágrafo Pequeno — usado para textos auxiliares, notas e descrições.
      </p>
      <p className={`smaller-text`} style={{ fontSize: clampValues['.smaller-text'] }}>
        Parágrafo Extra Pequeno — rótulos, avisos de rodapé e microtexto.
      </p>
    </>
  );
};

export default ParagraphsSection;

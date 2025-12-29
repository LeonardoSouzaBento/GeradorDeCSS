import { ClampValue } from '@/data/typography/types';
import { findKey } from '@/functions/findKey';

const largeText = findKey('--text-lg');
const normalText = findKey('--text-base');
const smallText = findKey('--text-sm');
const smallerText = findKey('--text-xs');

const ParagraphsSection = ({ clampValues }: { clampValues: ClampValue }) => {
  return (
    <>
      <p className={`large-text`} style={{ fontSize: clampValues[largeText] }}>
        Parágrafo Grande — ideal para introduções, heros ou destaque moderado.
      </p>
      <p className={`normal-text`} style={{ fontSize: clampValues[normalText] }}>
        Parágrafo Padrão — usado para leitura contínua. <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ea cumque dolor nam voluptas
        tempora dolorum, aliquam incidunt mollitia iste, sunt temporibus dolores repudiandae,
        explicabo possimus maxime soluta modi debitis?
      </p>
      <p className={`small-text`} style={{ fontSize: clampValues[smallText] }}>
        Parágrafo Pequeno — usado para textos auxiliares, notas e descrições.
      </p>
      <p className={`smaller-text`} style={{ fontSize: clampValues[smallerText] }}>
        Parágrafo Extra Pequeno — rótulos, avisos de rodapé e microtexto.
      </p>
    </>
  );
};

export default ParagraphsSection;

import { ClampValue } from '@/data/typography/types';
import { findKey } from '@/functions/typography/findKey';

const normalText = findKey('--text-base');
const h1 = findKey('--text-h1');
const h2 = findKey('--text-h2');
const h3 = findKey('--text-h3');
const h4 = findKey('--text-h4');
const h5 = findKey('--text-h5');
const h6 = findKey('--text-h6');
const bigH1 = findKey('--text-big-h1');

const TitlesSection = ({
  clampValues,
  props,
}: {
  clampValues: ClampValue;
  props: { ref: React.RefObject<HTMLDivElement> };
}) => {
  return (
    <div ref={props.ref} className={`space-y-2`}>
      <h1 className={`h1-hero`} style={{ fontSize: clampValues[bigH1] }}>
        h1 (maior) - Hero
      </h1>
      <h1 style={{ fontSize: clampValues[h1] }}>h1 - Título Principal</h1>
      <p style={{ fontSize: clampValues[normalText] }}>
        Bloco curto: Texto curto para testar espaçamento entre headings e blocos.
      </p>

      <h2 style={{ fontSize: clampValues[h2] }}>h2 - Subtítulo Secundário</h2>
      <p style={{ fontSize: clampValues[normalText] }}>
        Bloco longo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum
        dolor sit amet elit tristique, vel dictum lacus tincidunt. Integer sit amet dignissim
        turpis. Sed vulputate neque quis magna blandit convallis. Pellentesque id nibh vehicula,
        pretium ipsum vel, dapibus mi.
      </p>

      <h3 style={{ fontSize: clampValues[h3] }}>h3 - Seção</h3>
      <h4 style={{ fontSize: clampValues[h4] }}>h4 - Sub-seção</h4>
      <h5 style={{ fontSize: clampValues[h5] }}>h5 - Título Menor</h5>
      <h6 style={{ fontSize: clampValues[h6] }}>h6 - Título Bem Pequeno</h6>
    </div>
  );
};

export default TitlesSection;

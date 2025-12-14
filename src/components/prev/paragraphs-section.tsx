import { ClampValue } from "@/data/types";

const ParagraphsSection = ({ clampValues }: { clampValues: ClampValue }) => {
  return (
    <>
      <p className={`large-text`} style={{ fontSize: clampValues[".large-text"] }}>
        Parágrafo Grande — ideal para introduções, heros ou destaque moderado.
      </p>
      <p className={`normal-text`} style={{ fontSize: clampValues[".normal-text"] }}>
        Parágrafo Padrão — usado para leitura contínua.
      </p>
      <p className={`small-text`} style={{ fontSize: clampValues[".small-text"] }}>
        Parágrafo Pequeno — usado para textos auxiliares, notas e descrições.
      </p>
      <p className={`smaller-text`} style={{ fontSize: clampValues[".smaller-text"] }}>
        Parágrafo Extra Pequeno — ideal para rótulos, avisos de rodapé e
        microtexto.
      </p>
    </>
  );
};

export default ParagraphsSection;

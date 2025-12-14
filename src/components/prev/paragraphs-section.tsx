import { ClampValue } from "@/data/types";

const ParagraphsSection = ({ clampValues }: { clampValues: ClampValue }) => {
  return (
    <>
      <p style={{ fontSize: clampValues[".large-text"] }}>
        Parágrafo Grande — ideal para introduções, heros ou destaque moderado.
      </p>
      <p style={{ fontSize: clampValues[".normal-text"] }}>
        Parágrafo Padrão — usado para leitura contínua.
      </p>
      <p style={{ fontSize: clampValues[".small-text"] }}>
        Parágrafo Pequeno — usado para textos auxiliares, notas e descrições.
      </p>
      <p style={{ fontSize: clampValues[".smaller-text"] }}>
        Parágrafo Extra Pequeno — ideal para rótulos, avisos de rodapé e
        microtexto.
      </p>
    </>
  );
};

export default ParagraphsSection;

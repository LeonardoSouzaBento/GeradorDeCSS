import { ClampValue } from "@/data/types";
import { useEffect } from "react";

const TitlesSection = ({
  clampValues,
  props,
}: {
  clampValues: ClampValue;
  props: { ref: React.RefObject<HTMLDivElement> };
}) => {
  return (
    <div ref={props.ref} className={`space-y-2`}>
      <h1 className={`big-h1`} style={{ fontSize: clampValues[".big-h1"] }}>h1 (maior) - Hero</h1>
      <h1 style={{ fontSize: clampValues["h1"] }}>h1 - Título Principal</h1>
      <p style={{ fontSize: clampValues[".normal-text"] }}>
        Bloco curto: Texto curto para testar espaçamento entre headings e
        blocos.
      </p>

      <h2 style={{ fontSize: clampValues["h2"] }}>h2 - Subtítulo Secundário</h2>
      <p style={{ fontSize: clampValues[".normal-text"] }}>
        Bloco longo: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam condimentum dolor sit amet elit tristique, vel dictum lacus
        tincidunt. Integer sit amet dignissim turpis. Sed vulputate neque quis
        magna blandit convallis. Pellentesque id nibh vehicula, pretium ipsum
        vel, dapibus mi.
      </p>

      <h3 style={{ fontSize: clampValues["h3"] }}>h3 - Seção</h3>
      <h4 style={{ fontSize: clampValues["h4"] }}>h4 - Sub-seção</h4>
      <h5 style={{ fontSize: clampValues["h5"] }}>h5 - Título Menor</h5>
      <h6 style={{ fontSize: clampValues["h6"] }}>h6 - Título Bem Pequeno</h6>
    </div>
  );
};

export default TitlesSection;

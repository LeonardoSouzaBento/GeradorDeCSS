import { StateSetter } from "@/data/types";
import { iconSm } from "@/styles/lucideIconStyles";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Eye } from "lucide-react";

const PersonalGuidelines = ({
  setShowMoreStyles,
}: {
  setShowMoreStyles: StateSetter<boolean>;
}) => {
  return (
    <Card className={`xl:mb-0`}>
      <CardHeader>
        <CardTitle>Orientações</CardTitle>
      </CardHeader>
      <CardContent className={`space-y-4`}>
        <ul className={`list-disc list-inside space-y-2 text-muted-foreground`}>
          <li>
            Pegue <strong>mais estilos</strong> além do CSS de tamanho clicando
            no botão abaixo.
          </li>
          <li>
            Coloque, com exeção das variáveis, os estilos copiados em um <strong>arquivo separado</strong>{" "}
            chamado "typography.css", contendo apenas estilos para tipografia,
            pois há muitos estilos de tipografia a serem definidos, veja em "Ver mais estilos recomendados".
          </li>
          <li>
            Escreva as variáveis de :root (ou @theme), no arquivo
            globals.css. Defina também nesse arquivo as cores do texto e as fontes
            específicas para títulos, botões e corpo.
          </li>
          <li>
            Importe globals.css em typography.css para usar as variaveis de root
            (ou de @theme, no tailwind). Linke esse arquivo por último no head
            do html, isso evita sobreposição indevida de estilos.
          </li>
          <li>
            Prefira usar as classes{" "}
            <code className="text-sm">smaller-text</code>,{" "}
            <code className="text-sm">small-text</code> e{" "}
            <code className="text-sm">large-text</code> para estilizar tags p,
            pois elas têm line-height ajustados por você.
          </li>
        </ul>
        <Button
          variant="outline"
          className={`w-full hover:shadow-xs`}
          onClick={() => setShowMoreStyles(true)}
        >
          <Eye {...iconSm} />
          Ver mais estilos recomendados
        </Button>
      </CardContent>
    </Card>
  );
};

export default PersonalGuidelines;

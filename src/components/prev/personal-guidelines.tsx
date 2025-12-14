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
        <p className={`text-muted-foreground`}>
          Coloque os estilos copiados em um <strong>arquivo separado</strong>{" "}
          que tenha apenas estilos para textos. Um nome como "textStyles.css" é
          conveniente. Por outro lado, o melhor lugar para definir a fonte
          específica e as cores do texto é no globals.css. Importe o arquivo globals.css em textStyles.css para usar as variáveis text-[size] sobreescritas, se necessário. No entanto, para estilizar tags p maiores ou menores, prefira usar as classes smaller-text, small-text e large-text, pois elas têm line-height ajustados por você.
        </p>
        <p className={`mb-5 text-muted-foreground`}>
          Você precisará de <strong>mais estilos</strong> além do CSS de
          tamanho. Então, clique no botão abaixo para obter mais.
        </p>
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

import { iconMd, iconSm, iconXs } from '@/css/lucideIcons';
import { applyFontToTargets, loadFont } from '@/functions/typography/changeFont';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  H6Title,
  HeaderH6,
  Input,
  WrapperForm,
} from '@/ui/index';
import { BookType, Check, EyeOff, Info } from 'lucide-react';
import React, { useRef, useState } from 'react';

const typographyFonts = [
  'Roboto',
  'Open Sans',
  'Montserrat',
  'Lato',
  'Poppins',
  'Roboto Condensed',
];
const buttonPageFonts = ['Roboto', 'Montserrat', 'Lato', 'Poppins'];

const FontSelector = ({
  targetClassName = 'font-target',
  page = 'typography',
}: {
  targetClassName?: string;
  page?: string;
}) => {
  const [fontName, setFontName] = useState('');
  const [currentFont, setCurrentFont] = useState('Google Sans');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(true);
  const loadedFonts = useRef(new Set());
  const typographyPage = page === 'typography';

  const handleLoadFont = async (inputFontName: string) => {
    setIsLoading(true);
    setError('');

    try {
      const loadedName = await loadFont(inputFontName, loadedFonts.current);
      setCurrentFont(loadedName);
      applyFontToTargets(loadedName, targetClassName);
    } catch (err) {
      setError(err?.toString() || 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  // Handler para o formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLoadFont(fontName);
  };

  // Lista de fontes populares para sugestões
  const fontList = typographyPage ? typographyFonts : buttonPageFonts;

  return (
    <WrapperForm className={`${typographyPage ? 'mt-4 xl:mt-2' : 'xl:mt-0'}`}>
      <form onSubmit={handleSubmit} className={`border-b mb-[1cap]`}>
        <div className="pb-2">
          {typographyPage ? (
            <label className="text-base">Troque a fonte:</label>
          ) : (
            <HeaderH6 mb={0}>
              <H6Title>
                <BookType {...iconSm} />
                <h6>Fonte</h6>
              </H6Title>
            </HeaderH6>
          )}
          {currentFont && (
            <p className="text-muted-foreground text-sm mb-0.5">
              Fonte atual: <strong className="">{currentFont}</strong>
            </p>
          )}
        </div>

        <div className={`space-y-4 ${typographyPage ? 'sm:flex' : ''} gap-3 pb-4`}>
          <Input
            type="text"
            className={`${typographyPage ? 'sm:mb-0' : ''}`}
            value={fontName}
            onChange={(e) => setFontName(e.target.value)}
            placeholder="Digite o nome da fonte (ex: Roboto, Open Sans)"
            disabled={isLoading}
          />
          <Button
            className={`w-full ${typographyPage ? 'sm:w-max' : ''}`}
            type="submit"
            variant="ghost"
            disabled={isLoading}>
            <Check {...iconMd} />
            {isLoading ? 'Carregando...' : 'Aplicar Esta Fonte'}
          </Button>
        </div>
      </form>

      {error && <p className="text-destructive mb-3">{error}</p>}

      {/* Sugestões de fontes populares */}
      <div className="font-suggestions">
        <label className="text-muted-foreground mt-[1cap]">Sugestões:</label>
        <div className={`flex flex-wrap mt-1.5`}>
          {fontList.map((font) => (
            <Button
              key={font}
              variant="link"
              data-option
              isSelected={currentFont === font && !error}
              className={`mr-8`}
              onClick={() => {
                setFontName(font);
                handleLoadFont(font);
              }}
              disabled={isLoading}>
              {font}
            </Button>
          ))}
        </div>
      </div>

      {showAlert && typographyPage && (
        <Alert className={`mt-5`}>
          <Info {...iconXs} className="warn-icon" />
          <AlertTitle>Observações</AlertTitle>
          <Button
            variant="secondary"
            size="icon-sm"
            closeButton
            className={`absolute top-2 right-2 text-destructive`}
            onClick={() => setShowAlert(false)}>
            <EyeOff {...iconXs} />
          </Button>
          <AlertDescription>
            <ul className={`list-disc pl-4 space-y-1`}>
              <li>Fontes magras pedem pesos maiores, ajuste no seu projeto.</li>
              <li>Na escala 1.067 a diferença entre ps é mais difícil de perceber.</li>
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </WrapperForm>
  );
};

export default FontSelector;

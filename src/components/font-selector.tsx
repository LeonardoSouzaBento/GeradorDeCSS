import React, { useRef, useState } from 'react';
import { applyFontToTargets, loadFont } from '../functions/fontSelector';
import { Button } from '@/ui/button';
import { Check } from 'lucide-react';
import { iconMd } from '@/styles/lucideIconStyles';
import { Input } from '@/ui/input';

const FontSelector = ({ targetClassName = 'font-target' }: { targetClassName?: string }) => {
  const [fontName, setFontName] = useState('');
  const [currentFont, setCurrentFont] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const loadedFonts = useRef(new Set());

  const handleLoadFont = async (inputFontName: string) => {
    setIsLoading(true);
    setError('');

    try {
      const loadedName = await loadFont(inputFontName, loadedFonts.current);
      setCurrentFont(loadedName);
      applyFontToTargets(loadedName, targetClassName);
    } catch (err: any) {
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
  const popularFonts = ['Roboto', 'Open Sans', 'Montserrat', 'Lato', 'Poppins', 'Roboto Condensed'];

  return (
    <div className="border p-5 pt-3.5 mt-4 xl:mt-2 rounded-md">
      <form onSubmit={handleSubmit} className="mb-3 border-b">
        <div className="pb-2">
          <label className="text-base">Troque a fonte:</label>
          {currentFont && (
            <p className="text-muted-foreground text-sm mb-0.5">
              Fonte atual: <strong className="">{currentFont}</strong>
            </p>
          )}
        </div>

        <div className="space-y-4 sm:flex gap-3 pb-5">
          <Input
            type="text"
            className={`sm:mb-0`}
            value={fontName}
            onChange={(e) => setFontName(e.target.value)}
            placeholder="Digite o nome da fonte (ex: Roboto, Open Sans)"
            disabled={isLoading}
          />
          <Button
            className={`w-full sm:w-max`}
            type="submit"
            variant="outline"
            disabled={isLoading}>
            {isLoading ? 'Carregando...' : 'Aplicar Esta Fonte'}
            <Check {...iconMd} />
          </Button>
        </div>
      </form>

      {error && <p className="text-destructive mb-3">{error}</p>}

      {/* Sugestões de fontes populares */}
      <div className="font-suggestions">
        <label className="text-muted-foreground">Sugestões:</label>
        <div className={`flex flex-wrap gap-3 mt-1.5`}>
          {popularFonts.map((font) => (
            <Button
              key={font}
              variant="link"
              optionButton
              isSelected={currentFont === font && !error}
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
    </div>
  );
};

export default FontSelector;

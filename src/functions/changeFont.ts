export const normalizeFontName = (name: string) => {
  return name.trim().replace(/\s+/g, '+');
};

export const createGoogleFontsUrl = (fontName: string) => {
  const normalized = normalizeFontName(fontName);
  return `https://fonts.googleapis.com/css2?family=${normalized}:wght@400;500;600;700&display=swap`;
};

export const applyFontToTargets = (fontFamilyName: string, targetClassName: string) => {
  const targetElements = document.querySelectorAll(`.${targetClassName}`);

  targetElements.forEach((element) => {
    (element as HTMLElement).style.fontFamily = `'${fontFamilyName}', sans-serif`;
  });
};

export const loadFont = (inputFontName: string, loadedFonts: Set<unknown>): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!inputFontName.trim()) {
      reject('Erro: o input está vazio!');
      return;
    }

    const normalizedInput = inputFontName.trim();
    const normalCaseInput = normalizedInput.toLowerCase();

    if (loadedFonts.has(normalCaseInput)) {
      resolve(normalizedInput);
      return;
    }

    try {
      const linkId = `google-font-${normalCaseInput.replace(/\s+/g, '-')}`;

      const existingLink = document.getElementById(linkId);
      if (existingLink) {
        document.head.removeChild(existingLink);
      }

      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = createGoogleFontsUrl(normalizedInput);

      link.onload = () => {
        loadedFonts.add(normalCaseInput);
        resolve(normalizedInput);
      };

      link.onerror = () => {
        document.head.removeChild(link);
        reject(
          `Erro ao aplicar a fonte "${normalizedInput}". Digite o nome exato, como está no link do Google Fonts. Maiúsculas e minúsculas importam.`
        );
      };

      document.head.appendChild(link);
    } catch (err) {
      reject('Erro ao tentar carregar a fonte');
    }
  });
};

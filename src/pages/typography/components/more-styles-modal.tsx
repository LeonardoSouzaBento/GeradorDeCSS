import { moreCSSStyles, moreTwStyles } from '@/data/typography/moreStyles';
import { iconSm, iconXs } from '@/css/lucideIcons';
import { StateSetter } from '@/data/typography/types';
import { Button } from '@/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { Copy, Eye, EyeClosed, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useResizeWatcher } from '@/hooks/useResizeWatcher';

const options = [
  { name: 'Tailwind', value: 'tw', icon: Eye },
  { name: 'CSS', value: 'CSS', icon: EyeClosed },
];

function getPreHeight(
  cardRef: React.RefObject<HTMLDivElement>,
  headerRef: React.RefObject<HTMLDivElement>,
  buttonsDivRef: React.RefObject<HTMLDivElement>,
  rootFontSize: number,
) {
  const cardHeight = cardRef.current.scrollHeight;
  const headerHeight = headerRef.current?.scrollHeight || 0;
  const buttonsDivHeight = buttonsDivRef.current?.scrollHeight || 0;
  const preHeight = ((cardHeight - headerHeight - buttonsDivHeight) / rootFontSize - 1.5).toFixed(
    3,
  );
  return preHeight;
}

function scrollToTop(preRef: React.RefObject<HTMLPreElement>) {
  if (!preRef.current) return;
  preRef.current.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const MoreStylesModal = ({
  setShowMoreStyles,
  rootFontSize,
}: {
  setShowMoreStyles: StateSetter<boolean>;
  rootFontSize: number;
}) => {
  const [selected, setSelected] = useState<string>('tw');
  const [copied, setCopied] = useState(false);
  const [preHeight, setPreHeight] = useState('0');
  const [wasResized, setWasResized] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonsDivRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  useResizeWatcher(setWasResized);

  const copy = () => {
    navigator.clipboard.writeText(selected === 'tw' ? moreTwStyles : moreCSSStyles);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (!cardRef.current) {
      setPreHeight(getPreHeight(cardRef, headerRef, buttonsDivRef, rootFontSize));
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;
    setPreHeight(getPreHeight(cardRef, headerRef, buttonsDivRef, rootFontSize));
    scrollToTop(preRef);
  }, [wasResized]);

  useEffect(() => {
    scrollToTop(preRef);
  }, [selected]);

  return (
    <div
      onClick={() => setShowMoreStyles(false)}
      className={`fixed inset-0 z-12 w-full h-screen flex 
        items-center justify-center bg-black/7 rounded-none p-0 box-border`}>
      <Card
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        className={`w-full h-[calc(100vh-2.5rem)] max-w-xl shadow-xl 
        rounded-lg pb-0`}>
        <CardHeader
          ref={headerRef}
          className={`w-full flex flex-row flex-nowrap 
          justify-between mb-0`}>
          <div>
            <CardTitle className="mb-cap-offset">
              <h3>Estilos adicionais</h3>
            </CardTitle>
            <CardDescription>Larguras máxima do corpo, pesos e line-height</CardDescription>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className={`border-border rounded-full 
            -mr-2 mt-4`}
            onClick={(e) => {
              e.stopPropagation();
              setShowMoreStyles(false);
            }}>
            <X {...iconSm} />
          </Button>
        </CardHeader>

        <CardContent className={`w-full flex flex-col`}>
          <div ref={buttonsDivRef} className={`w-full sticky top-0 z-6 bg-white py-4.5`}>
            <div
              className={`w-full h-max py-px flex gap-4 justify-start 
                flex-wrap sm:flex-nowrap`}>
              <Button
                size="sm"
                className={`min-w-1/3 shrink-auto rounded-full pl-3.5`}
                onClick={copy}>
                <Copy {...iconXs} />
                {copied ? 'Copiado!' : 'Copiar estilos'}
              </Button>

              {options.map((option) => {
                const isSelected = selected === option.value;
                return (
                  <Button
                    size="sm"
                    variant="outline"
                    key={option.value}
                    data-option
                    isSelected={isSelected}
                    className={`sm:min-w-max rounded-full shadow-xs`}
                    onClick={() => {
                      setSelected(option.value);
                    }}>
                    {isSelected ? (
                      <Eye {...iconXs} className={`scale-102`} />
                    ) : (
                      <EyeClosed {...iconXs} className={`scale-93`} />
                    )}
                    {option.name}
                  </Button>
                );
              })}
            </div>
          </div>

          <pre
            ref={preRef}
            className={`bg-background rounded-md max-h-none mb-6`}
            style={{ height: `${preHeight}rem` }}>
            {selected === 'tw' ? moreTwStyles : moreCSSStyles}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoreStylesModal;

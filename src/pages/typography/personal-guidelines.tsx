import { StateSetter } from '@/data/typography/types';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion';
import { Button } from '@/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { Icon } from '@/ui/lucide-icon';
import { ChevronDown, Eye } from 'lucide-react';
import { useState } from 'react';

const guidelines = [
  {
    title: '1. Estilos complementares de tipografia',
    content: (
      <>
        Pegue <strong>mais estilos</strong> além do CSS de tamanho clicando no botão{' '}
        <em>"Ver mais estilos recomendados"</em> abaixo.
      </>
    ),
  },
  {
    title: '2. Arquivo separado typography.css',
    content: (
      <>
        Com exceção das variáveis, coloque os estilos copiados em um{' '}
        <strong>arquivo separado</strong> chamado <code>typography.css</code>, contendo apenas
        estilos para tipografia, pois há muitos estilos a serem definidos.
      </>
    ),
  },
  {
    title: '3. Variáveis e fontes no globals.css',
    content: (
      <>
        Escreva as variáveis de <code>:root</code> (ou <code>@theme</code>) no arquivo{' '}
        <code>globals.css</code>. Defina também nesse arquivo as cores do texto e as fontes
        específicas para títulos, botões e corpo, se houverem.
      </>
    ),
  },
  {
    title: '4. Importação e ordem no HTML',
    content: (
      <>
        Importe <code>globals.css</code> em <code>typography.css</code> para usar as variáveis de
        root (ou de <code>@theme</code>, no Tailwind). Linke esse arquivo por último no{' '}
        <code>&lt;head&gt;</code> do HTML para evitar sobreposição indevida de estilos.
      </>
    ),
  },
  {
    title: '5. Classes utilitárias para parágrafos',
    content: (
      <>
        Prefira usar as classes <code className="text-sm">smaller-text</code>,{' '}
        <code className="text-sm">small-text</code> e <code className="text-sm">large-text</code>{' '}
        para estilizar tags <code>&lt;p&gt;</code>, pois elas têm <code>line-height</code> ajustados
        por você.
      </>
    ),
  },
];

const PersonalGuidelines = ({ setShowMoreStyles }: { setShowMoreStyles: StateSetter<boolean> }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={cn('xl:mb-0 flex flex-col justify-between h-fit', !isOpen && 'pb-4 sm:pb-4.5')}>
      <div>
        <CardHeader className={cn(isOpen ? 'mb-3' : 'mb-0')}>
          <CardTitle
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full justify-between cursor-pointer select-none">
            <h3>Orientações</h3>
            <Icon
              Icon={ChevronDown}
              className={cn(
                'shrink-0 transition-transform duration-200',
                isOpen && 'rotate-180',
              )}
            />
          </CardTitle>
        </CardHeader>
        {isOpen && (
          <CardContent className="space-y-3">
            <Accordion type="single" collapsible className="w-full gap-cap-offset">
              {guidelines.map((item, index) => (
                <AccordionItem key={index} value={`guideline-${index}`} className="mb-2">
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        )}
      </div>
      {isOpen && (
        <CardContent className="pt-2">
          <Button
            variant="outline"
            className="w-full px-5 sm:px-6 hover:shadow-xs"
            onClick={() => setShowMoreStyles(true)}>
            <Icon Icon={Eye} size="sm" />
            Ver mais estilos recomendados
          </Button>
        </CardContent>
      )}
    </Card>
  );
};

export default PersonalGuidelines;

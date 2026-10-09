import { questions } from '@/data/typography/questions';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { Icon } from '@/ui/lucide-icon';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const RelevantQuestions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={cn('h-fit', !isOpen && 'pb-4 sm:pb-4.5')}>
      <CardHeader className={cn(isOpen ? 'mb-3' : 'mb-0')}>
        <CardTitle
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full justify-between cursor-pointer select-none">
          <h3>Perguntas pertinentes</h3>
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
        <CardContent>
          <Accordion type="single" collapsible className="w-full gap-cap-offset">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-2">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      )}
    </Card>
  );
};

export default RelevantQuestions;

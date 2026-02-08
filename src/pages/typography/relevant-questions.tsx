import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { questions } from '@/data/typography/questions';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion';

const RelevantQuestions = () => {
  return (
    <Card>
      <CardHeader className={`mb-3`}>
        <CardTitle>
          <h3>Perguntas pertinentes</h3>
        </CardTitle>
      </CardHeader>
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
    </Card>
  );
};

export default RelevantQuestions;

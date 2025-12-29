import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { questions } from '@/data/typography/questions';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion';

const RelevantQuestions = () => {
  return (
    <Card>
      <CardHeader className={`mb-3`}>
        <CardTitle>Perguntas pertinentes</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
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

import { iconLg } from '@/css/lucideIcons';
import { Button } from '@/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { questions } from '@/data/typography/questions';

const css = {
  wrapperQuestions: `mb-3 last:mb-0!`,
  wrapperPAndButton: `h-auto flex justify-between
  gap-4 min-h-9`,
  selectedWrapperPAndButton: ``,
  pQuestion: `box-content text-lg`,
  pAnswer: `text-muted-foreground xl:pr-4`,
};

const RelevantQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');

  return (
    <Card>
      <CardHeader className={`mb-3`}>
        <CardTitle>Perguntas pertinentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {questions.map((item, index) => {
            const selected = selectedQuestion === item.question;
            return (
              <div
                key={index}
                className={`${css.wrapperQuestions}`}
                onClick={() => {
                  setSelectedQuestion((prev) => (prev === item.question ? '' : item.question));
                }}>
                <div
                  className={`${css.wrapperPAndButton} 
                  ${selected && css.selectedWrapperPAndButton}`}>
                  <p className={`${css.pQuestion}`}>{item.question}</p>

                  <Button className={`rounded-full`} variant="ghost" size="icon">
                    <ChevronDown {...iconLg} className={selected ? 'rotate-180' : ''} />
                  </Button>
                </div>

                <CollapsibleText isOpen={selected}>{item.answer}</CollapsibleText>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RelevantQuestions;

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const CollapsibleText = ({ isOpen, children }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!ref.current) return;

    if (isOpen) {
      setHeight(ref.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, children]);

  return (
    <p
      ref={ref}
      style={{ height }}
      className="
        overflow-hidden
        transition-[height,opacity]
        duration-200
        ease-out
        text-muted-foreground
        pr-6
      ">
      {children}
    </p>
  );
};

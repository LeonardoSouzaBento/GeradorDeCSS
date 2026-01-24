import type { OptionReturn } from '@/data/buttons/variables';
import { optionsReturn } from '@/data/buttons/variables';
import { Button, Card, CardContent, CardHeader, CardTitle, WrapperButtons } from '@/ui';
import CopyButton from './padding-generator/copy-button';

interface CSSReturnProps {
  optionReturn: OptionReturn;
  setOptionReturn: React.Dispatch<React.SetStateAction<OptionReturn>>;
  returns: string[];
  currentOptionIndex: number;
  colorNickname: string;
  setColorNickname: React.Dispatch<React.SetStateAction<string>>;
}

const CSSReturn = ({
  optionReturn,
  setOptionReturn,
  returns,
  currentOptionIndex,
  setColorNickname,
  colorNickname,
}: CSSReturnProps) => {
  return (
    <Card className="h-full border space-y-5 relative">
      <CardHeader className="border-none mb-[0.25ex]">
        <CardTitle>Retorno</CardTitle>
      </CardHeader>
      <WrapperButtons>
        {optionsReturn.map((item: OptionReturn) => (
          <Button
            key={item}
            size="sm"
            variant="ghost"
            optionButton
            isSelected={optionReturn === item}
            onClick={() => {
              setOptionReturn(item);
            }}>
            {item}
          </Button>
        ))}
      </WrapperButtons>
      <CardContent className="relative">
        <pre className="h-90">{returns[currentOptionIndex]}</pre>
        {optionReturn === 'variáveis' && (
          <Button
            size="sm"
            variant="ghost"
            optionButton
            className="absolute bottom-4 right-4"
            onClick={() => {
              const nickname = colorNickname === 'primary' ? 'secondary' : 'primary';
              setColorNickname(nickname);
            }}>
            {colorNickname === 'primary' ? 'cor secundária' : 'cor primária'}
          </Button>
        )}
      </CardContent>
      <CopyButton returnString={returns[currentOptionIndex]} />
    </Card>
  );
};

export default CSSReturn;

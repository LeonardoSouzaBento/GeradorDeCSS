import type { OptionReturn } from '@/data/buttons/variables';
import { optionsReturn } from '@/data/buttons/variables';
import { Button, Card, CardContent, WrapperButtons } from '@/ui';
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
    <Card noHeader className="h-full xl:h-157 p-5 border flex flex-col gap-4.5 relative">
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
      <CardContent className="relative space-y-5">
        <pre className="h-105.5">{returns[currentOptionIndex]}</pre>
        {optionReturn === 'variáveis' && (
          <Button
            size="sm"
            variant="ghost"
            optionButton
            className="absolute bottom-0 right-2"
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

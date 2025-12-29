import { WrapperInput } from '@/pages/typography/components/inputs-card/wrapper-input';
import { StateSetter } from '@/data/typography/types';
import { Input } from '@/ui/input';
import { useEffect } from 'react';

interface Props {
  newMinBase: number | null;
  setnewMinBase: StateSetter<number | null>;
  newMaxBase: number;
  setnewMaxBase: StateSetter<number | null>;
  setCanGenerate: StateSetter<number>;
}

const Inputs = ({
  newMinBase,
  setnewMinBase,
  newMaxBase,
  setnewMaxBase,
  setCanGenerate,
}: Props) => {
  useEffect(() => {
    if (
      newMinBase &&
      newMaxBase &&
      newMinBase.toString().length > 1 &&
      newMaxBase.toString().length > 1
    ) {
      setCanGenerate((prev) => prev + 1);
    }
  }, [newMaxBase, newMinBase]);

  return (
    <div className={`grid grid-cols-2 gap-4 -mb-px`}>
      <WrapperInput htmlFor="minBase" label="até 640px">
        <Input
          type="number"
          id="minBase"
          placeholder="17.5"
          required
          value={newMinBase || ''}
          onChange={(e) => setnewMinBase(Number(e.target.value))}
        />
      </WrapperInput>

      <WrapperInput htmlFor="maxBase" label="em 1280px">
        <Input
          type="number"
          id="maxBase"
          placeholder="18.5"
          required
          value={newMaxBase || ''}
          onChange={(e) => {
            setnewMaxBase(Number(e.target.value));
          }}
        />
      </WrapperInput>
    </div>
  );
};

export default Inputs;

// const CleanInputButton = ({ onClick }: { onClick: () => void }) => {
//   return (
//     <Button
//       variant="secondary"
//       size="icon-xs"
//       className={`size-8 absolute bottom-1 right-1
//       rounded-full z-10 text-destructive bg-background`}
//       onClick={onClick}
//     >
//       <Delete {...iconSm} />
//     </Button>
//   );
// };

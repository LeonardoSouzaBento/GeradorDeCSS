import { ColorShade } from '@/hooks/useColorShades';
import { cn } from '@/lib/utils';

interface Props {
  shades: ColorShade[];
  cssWrapper?: string;
}

export const PalletPreview = ({ shades, cssWrapper }: Props) => {
  const baseColor = shades.find((item) => item.isBase);
  return (
    <>
      <div className={cn('w-full flex flex-wrap rounded-xs overflow-hidden', cssWrapper)}>
        {shades.map((item) => (
          <div
            key={item.stop}
            className={`w-20.5 text-left p-[1ex]`}
            style={{
              backgroundColor: item.hex,
              color: item.textColor,
              zIndex: item.isBase ? 2 : 1,
            }}>
            <p className="small-text font-medium max-w-max">{item.stop}</p>
          </div>
        ))}
      </div>
      <p className="pt-[1cap] smaller-text">
        Sua cor: <br /> <strong>{baseColor?.stop}</strong> | {baseColor?.hex}{' '}
      </p>
    </>
  );
};

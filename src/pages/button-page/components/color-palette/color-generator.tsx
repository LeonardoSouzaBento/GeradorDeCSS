import { ColorShade } from '@/hooks/useColorShades';
import chroma from 'chroma-js';

interface ColorGeneratorProps {
  blackColor: string;
  whiteColor: string;
  shades: ColorShade[];
}

const ColorGenerator = ({ blackColor, whiteColor, shades }: ColorGeneratorProps) => {


  return (
    <div>
      <div className="flex flex-wrap rounded-lg overflow-hidden">
        {shades.map((item) => (
          <div
            key={item.stop}
            className={`size-22 relative text-left p-[1ex]`}
            style={{
              backgroundColor: item.hex,
              color: chroma(item.hex).luminance() > 0.2 ? blackColor : whiteColor,
              zIndex: item.isBase ? 2 : 1,
            }}>
            <p className="small-text font-medium max-w-max">{item.stop}</p>
            <p className="smaller-text opacity-80 max-w-max">{item.hex}</p>

            {item.isBase && (
              <p
                className={`smaller-text font-medium px-2
                 absolute bottom-1 right-1 w-[calc(100%-0.5rem)] text-center`}
                style={{
                  color: chroma(item.hex).luminance() > 0.2 ? blackColor : whiteColor,
                  backgroundColor: chroma(item.hex).luminance() > 0.2 ? whiteColor : blackColor,
                }}>
                Sua cor
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorGenerator;

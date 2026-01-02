import { iconSm, iconXs } from '@/css/lucideIcons';
import { ColorShade } from '@/hooks/useColorShades';
import { Alert, AlertDescription, AlertTitle, Button, H6Title, HeaderH6, WrapperButtons, WrapperForm } from '@/ui';
import chroma from 'chroma-js';
import { ChartSpline, Info, Palette } from 'lucide-react';

interface ColorGeneratorProps {
  blackColor: string;
  whiteColor: string;
  shades: ColorShade[];
}

const ColorGenerator = ({ blackColor, whiteColor, shades }: ColorGeneratorProps) => {
  const baseColor = shades.find((item) => item.isBase);

  return (
    <div className='space-y-5'>
      <WrapperForm>
        <HeaderH6 mb={1}>
          <H6Title>
            <Palette {...iconSm} />
            <h6>Paleta de Cores</h6>
          </H6Title>
        </HeaderH6>
        <div className="w-full flex flex-wrap rounded-lg overflow-hidden">
          {shades.map((item) => (
            <div
              key={item.stop}
              className={`w-20.5 text-left p-[1ex]`}
              style={{
                backgroundColor: item.hex,
                color: chroma(item.hex).luminance() > 0.2 ? blackColor : whiteColor,
                zIndex: item.isBase ? 2 : 1,
              }}>
              <p className="small-text font-medium max-w-max">{item.stop}</p>
            </div>
          ))}
        </div>
        <p className="pt-[1ex] smaller-text">
          Sua cor: <br /> <strong>{baseColor.stop}</strong> | {baseColor.hex}{' '}
        </p>
      </WrapperForm>
      <WrapperForm>
        <HeaderH6 mb={1}>
          <H6Title>
            <ChartSpline {...iconSm} />
            <h6>Contrastes sugeridos</h6>
          </H6Title>
        </HeaderH6>
        <WrapperButtons className='flex gap-2 mb-4'>
          <Button>Fraco</Button>
          <Button>Medio</Button>
          <Button>Forte</Button>
        </WrapperButtons>
        <Alert>
          <Info {...iconXs}/>
          <AlertTitle>
            Recomendação
          </AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </AlertDescription>
        </Alert>
      </WrapperForm>
    </div>
  );
};

export default ColorGenerator;

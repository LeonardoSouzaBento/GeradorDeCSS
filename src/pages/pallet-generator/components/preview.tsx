import { variables } from '@/data/palette-generator/data';
import { H6Title, HeaderH6, WrapperButtons, WrapperForm } from '@/ui';

interface PreviewProps {
  neutralColors: string[];
}

const Preview = ({ neutralColors }: PreviewProps) => {
  return (
    <WrapperForm>
      <HeaderH6 mb={0.5}>
        <H6Title>
          <h6>Prévia</h6>
        </H6Title>
      </HeaderH6>
      <div className="grid grid-cols-1 gap-4 pre-lg:grid-cols-[1fr_1.2fr]">
        <WrapperButtons className="w-full">
          {neutralColors.map((color, index) => {
            return (
              <div
                key={variables[index]}
                className="flex pre-lg:flex-auto items-center gap-2 rounded-md border px-3">
                <div
                  className="w-8 h-9.5 rounded-md"
                  style={{
                    background: color,
                  }}
                />
                <div className="flex-1 pt-ex-offset pb-cap-offset">
                  <p className="font-semibold small-text">{variables[index]}</p>
                  <p className="smaller-text text-muted-foreground">{color}</p>
                </div>
              </div>
            );
          })}
        </WrapperButtons>

        <div
          className="rounded-md p-4 pt-3 pb-6 relative"
          style={{ border: `1px solid ${neutralColors[2]}` }}>
          <h3 className="mb-1" style={{ color: neutralColors[0] }}>
            Color: card-foreground
          </h3>
          <p
            className="pb-1 border-b mb-cap-offset large-text"
            style={{ color: neutralColors[1], borderColor: `${neutralColors[2]}` }}>
            Color:muted-foreground
          </p>
          <div className="flex flex-col">
            <label className="small-text mb-ex-offset" style={{ color: neutralColors[0] }}>
              Color: card-foreground
            </label>
            <input
              className="rounded-md py-1 px-[1ex] border"
              type="text"
              placeholder="input de texto"
              value="input-border + input-bg"
              style={{
                background: neutralColors[4],
                borderColor: `${neutralColors[2]}`,
                color: `${neutralColors[1]}`,
              }}
            />
          </div>
          <p className="absolute -bottom-3 left-4 text-xs" style={{ color: neutralColors[1] }}>
            border
          </p>
        </div>
      </div>
    </WrapperForm>
  );
};

export default Preview;

import { variables } from '@/data/palette-generator/data';
import { Card, CardHeader, CardTitle, WrapperButtons } from '@/ui';

interface PreviewProps {
  neutralColors: string[];
}

const Preview = ({ neutralColors }: PreviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Prévia</CardTitle>
      </CardHeader>
      <WrapperButtons>
        {neutralColors.map((color, index) => {
          return (
            <div key={variables[index]} className="flex items-center gap-4 rounded-md border px-3">
              <div className="flex-1 pt-ex-offset pb-cap-offset">
                <div className="font-semibold">{variables[index]}</div>
                <div className="text-xs opacity-75">{color}</div>
              </div>
              <div
                className="w-8 h-8 rounded-md border border-gray-200"
                style={{
                  background: color,
                }}
              />
            </div>
          );
        })}
      </WrapperButtons>
      <div className="mt-4">
        <div className="rounded-md p-4 pt-3" style={{ border: `1px solid ${neutralColors[2]}` }}>
          <h3 className="mb-1" style={{ color: neutralColors[0] }}>
            Título com card-foreground
          </h3>
          <p
            className="pb-1 border-b mb-2 large-text"
            style={{ color: neutralColors[1], borderColor: `${neutralColors[2]}` }}>
            Parágrafo com muted-foreground
          </p>
          <div className="flex flex-col mb-4">
            <label className="small-text mb-ex-offset" style={{ color: neutralColors[0] }}>
              Label
            </label>
            <input
              className="rounded-md py-1 px-[1ex] border"
              type="text"
              placeholder="input de texto"
              value="input-bg + input-border"
              style={{
                background: neutralColors[4],
                borderColor: `${neutralColors[2]}`,
                color: `${neutralColors[1]}`
              }}
            />
          </div>
          <p style={{ color: neutralColors[1] }}>*Borda do card com border*</p>
        </div>
      </div>
    </Card>
  );
};

export default Preview;

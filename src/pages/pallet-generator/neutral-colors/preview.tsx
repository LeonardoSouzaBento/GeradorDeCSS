import { H6Title, HeaderH6, Icon } from '@/ui';
import { Eye } from 'lucide-react';
import { NeutralColors } from '../neutral-colors';

interface PreviewProps {
  neutralColors: NeutralColors;
}

export const Preview = ({ neutralColors }: PreviewProps) => {
  return (
    <div>
      <HeaderH6 mb={0.75}>
        <H6Title>
          <Icon Icon={Eye} />
          <h6>Prévia</h6>
        </H6Title>
      </HeaderH6>
      <div className="grid grid-cols-1 gap-4 pre-lg:grid-cols-[1.2fr_1fr] xl:grid-cols-[1fr_0.9fr]">
        <div
          className="p-4 pt-3 pb-6 relative rounded-sm"
          style={{ border: `1px solid ${neutralColors['border']}` }}>
          <h3 className="mb-1" style={{ color: neutralColors['foreground'] }}>
            Color: foreground
          </h3>

          <p
            className="pb-1 border-b mb-cap-offset large-text"
            style={{
              color: neutralColors['muted-foreground'],
              borderColor: neutralColors['border'],
            }}>
            Color: muted-foreground
          </p>

          <div className="flex flex-col">
            <label
              className="small-text mb-ex-offset"
              style={{ color: neutralColors['foreground'] }}>
              Color: foreground
            </label>

            <input
              className="rounded-xs py-1 px-[1ex] border"
              type="text"
              placeholder="input de texto"
              value="input-border + input-bg"
              style={{
                background: neutralColors['input'],
                borderColor: neutralColors['input-border'],
                color: neutralColors['muted-foreground'],
              }}
              readOnly
            />
          </div>

          <p
            className="absolute -bottom-3 left-4 text-xs"
            style={{ color: neutralColors['muted-foreground'] }}>
            border
          </p>
        </div>

        <div
          className="w-full grid grid-cols-1 pre-sm:grid-cols-2 md:grid-cols-3
        pre-lg:grid-cols-2! gap-3">
          {Object.entries(neutralColors).map(([name, color]) => (
            <div
              key={name}
              className="flex pre-lg:flex-auto items-center gap-2 rounded-sm">
              <div className="w-8 h-9.5 rounded-xs" style={{ background: color }} />
              <div className="flex-1 pt-ex-offset pb-cap-offset">
                <p
                  className="font-semibold small-text"
                  style={{ color: neutralColors['foreground'] }}>
                  {name}
                </p>
                <p className="smaller-text" style={{ color: neutralColors['muted-foreground'] }}>
                  {color}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

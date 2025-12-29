import { Input } from '@/ui/input';
import React from 'react';

type Props = {
  currentColor: string;
  setCurrentColor: (color: string) => void;
  borderWidth: number;
  setBorderWidth: (borderWidth: number) => void;
};

const StyleSelector = ({
  currentColor,
  setCurrentColor,
  borderWidth,
  setBorderWidth,
}: Props) => {
  return (
    <div>
      <div>
        <h5>Cor</h5>
        <div>
          <Input
            type="text"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h5>Espessura da borda</h5>
        <div>
          <Input
            type="number"
            value={borderWidth}
            onChange={(e) => setBorderWidth(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;

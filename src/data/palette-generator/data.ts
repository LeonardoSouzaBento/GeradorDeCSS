export const initialPaletteVariables = {
  foreground: {
    saturationMin: 15,
    saturationMax: 22,
    lightnessMin: 15,
    lightnessMax: 20,
    stops: [1000],
  },
  'muted-foreground': {
    saturationMin: 8,
    saturationMax: 14,
    lightnessMin: 33,
    lightnessMax: 43,
    stops: [800, 900],
  },
  border: {
    saturationMin: 5,
    saturationMax: 8,
    lightnessMin: 78,
    lightnessMax: 88,
    stops: [300, 400],
  },
  'input-border': {
    saturationMin: 8,
    saturationMax: 12,
    lightnessMin: 65,
    lightnessMax: 72,
    stops: [400, 500],
  },
  'input': {
    saturationMin: 4,
    saturationMax: 6,
    lightnessMin: 95,
    lightnessMax: 98,
    stops: [50, 100],
  },
};

function generateSteps(min: number, max: number, steps: number): number[] {
  const step = (max - min) / (steps - 1);

  return Array.from({ length: steps }, (_, i) => Number((min + step * i).toFixed(2)));
}

export const paletteVariables = Object.fromEntries(
  Object.entries(initialPaletteVariables).map(([key, item]) => {
    return [
      key,
      {
        ...item,
        saturationsValues: generateSteps(item.saturationMin, item.saturationMax, 8),
        lightnessValues: generateSteps(item.lightnessMin, item.lightnessMax, 11),
      },
    ];
  }),
);

export const colorNames = Object.keys(paletteVariables);

export const saturationValues = Object.values(paletteVariables).map(
  (item) => item.saturationsValues,
);
export const lightnessValues = Object.values(paletteVariables).map((item) => item.lightnessValues);

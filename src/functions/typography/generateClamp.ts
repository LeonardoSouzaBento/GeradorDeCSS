export function generateClamp(
  minFont: number,
  maxFont: number,
  minWidth: number = 640,
  maxWidth: number = 1536
): string {
  const slope = (maxFont - minFont) / (maxWidth - minWidth);
  const yAxisIntersection = minFont - slope * minWidth;

  const preferred = `calc(${yAxisIntersection.toFixed(
    2
  )}px + ${(slope * 100).toFixed(5)}vw)`;

  return `clamp(${minFont.toFixed(2)}px, ${preferred}, ${maxFont.toFixed(2)}px)`;
}

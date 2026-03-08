import { ButtonsWrapper } from "@/ui";
import { Package } from "lucide-react";

export const IconWeightScalePreview = ({
  iconWeightScale,
  strokeWidth,
  color,
}: {
  iconWeightScale: number[];
  strokeWidth: number;
  color: string;
}) => {
  return (
    <ButtonsWrapper className="p-4 border gap-3.5">
      {iconWeightScale.map((weight) => (
        <Package
          size={24}
          key={weight}
          strokeWidth={weight}
          color={color}
          style={{
            boxSizing: "content-box",
            padding:
              strokeWidth === weight ? 6 : 0,
            border:
              strokeWidth === weight ? "1px solid var(--color-border)" : "none",
          }}
        />
      ))}
    </ButtonsWrapper>
  );
};

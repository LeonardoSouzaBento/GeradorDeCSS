import { ButtonsWrapper } from "@/ui";
import { Package } from "lucide-react";

export const IconWeightScalePreview = ({
  iconWeightScale,
  color,
}: {
  iconWeightScale: number[];
  color: string;
}) => {
  return (
    <ButtonsWrapper className="p-4 border gap-3.5">
      {iconWeightScale.map((weight) => (
        <Package size={24} key={weight} strokeWidth={weight} color={color} />
      ))}
    </ButtonsWrapper>
  );
};
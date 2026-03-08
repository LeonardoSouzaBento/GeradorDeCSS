import { H6Description, H6Title, HeaderH6, Icon, Input } from "@/ui";
import { Weight } from "lucide-react";

export const InputValue = ({
  scrollToBottom,
  strokeWidth,
  setStrokeWidth,
}: {
  scrollToBottom: () => void;
  strokeWidth: number;
  setStrokeWidth: (value: number) => void;
}) => {
  return (
    <>
      <HeaderH6 mb={0.5}>
        <H6Title>
          <Icon Icon={Weight} className="mb-1" />
          <h6>Peso do ícone</h6>
        </H6Title>
      </HeaderH6>
      <Input
        className="max-w-56 lg:max-w-none"
        type="number"
        min={1.5}
        max={5}
        step={0.15}
        value={strokeWidth}
        onClick={scrollToBottom}
        onChange={(e) => {
          setStrokeWidth(Number(e.target.value));
        }}
      />
      
    </>
  );
};

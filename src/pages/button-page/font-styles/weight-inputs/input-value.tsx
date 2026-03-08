import { H6Description, H6Title, HeaderH6, Icon, Input } from "@/ui";
import { validateDecimalInput } from "@/utils";
import { Weight } from "lucide-react";
import { useState } from "react";

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
      <HeaderH6 mb={1}>
        <H6Title>
          <Icon Icon={Weight} className="mb-1" />
          <h6>Peso do ícone</h6>
        </H6Title>
        <H6Description>
          Harmonize o peso do ícone com o peso da fonte
        </H6Description>
      </HeaderH6>
      <Input
        type="number"
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

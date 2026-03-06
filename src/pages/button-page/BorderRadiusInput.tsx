import { StateSetter } from "@/data/typography/types";
import {
  Button,
  ButtonsWrapper,
  FormWrapper,
  H6Title,
  HeaderH6,
  Icon,
  Input,
  InputWrapper,
  Separator,
} from "@/ui";
import { SquareRoundCorner } from "lucide-react";

const radiusOptions = [0, 4, 8, 12, 16, 999];

export const BorderRadiusInput = ({
  borderRadius,
  setBorderRadius,
}: {
  borderRadius: number;
  setBorderRadius: StateSetter<number>;
}) => {
  return (
    <FormWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end max-w-max">
        <InputWrapper>
          <HeaderH6 mb={0}>
            <H6Title>
              <Icon Icon={SquareRoundCorner} size="sm" className="mb-0.5" />
              <h6>Raio de borda</h6>
            </H6Title>
          </HeaderH6>
          <Input
            id="border-radius"
            type="number"
            value={borderRadius}
            onChange={(e) => setBorderRadius(Number(e.target.value))}
          />
        </InputWrapper>
        <ButtonsWrapper>
          {radiusOptions.map((radius) => (
            <Button
              data-round
              variant="ghost"
              selected={borderRadius === radius}
              size="icon"
              key={radius}
              onClick={() => setBorderRadius(radius)}
            >
              {radius}
            </Button>
          ))}
        </ButtonsWrapper>
      </div>
    </FormWrapper>
  );
};

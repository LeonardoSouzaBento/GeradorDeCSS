import { ButtonPageContext } from "@/contexts";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  FormWrapper,
  H6Title,
  HeaderH6,
  Icon,
} from "@/ui";
import { ButtonsWrapper } from "@/ui/index";
import { Info, ThumbsUp } from "lucide-react";
import { useContext } from "react";
import { ResizableButton } from "./padding-generator";

const buttonTypes = ["fill", "outline", "ghost"] as const;

const Preview = ({ color50 }: { color50: string }) => {
  const {
    badContrast,
    currentButtonsData,
    iconButtonSizes,
    iconSizes,
    strokeWidth,
    color,
  } = useContext(ButtonPageContext);

  return (
    <FormWrapper className={`flex flex-col gap-3 min-w-full pb-0 border-none`}>
      <HeaderH6 mb={0}>
        <H6Title>
          <h6>Prévia</h6>
        </H6Title>
      </HeaderH6>
      {badContrast && (
        <Alert data-warn>
          <Icon Icon={Info} />
          <AlertTitle data-warn>Alerta</AlertTitle>
          <AlertDescription data-warn>
            Cores claras demais são ruins para acessibilidade!
          </AlertDescription>
        </Alert>
      )}
      <div className="w-auto space-y-4">
        <div className="flex flex-wrap gap-4 max-w-max">
          {buttonTypes.map((type) => (
            <ButtonsWrapper key={type} className="items-start">
              {currentButtonsData.map((item, index) => {
                return (
                  <ResizableButton
                    key={index}
                    name={item.name}
                    height={Number(item.height)}
                    relativeSize={item.relativeSize}
                    adjustment={item.adjustment}
                    index={index}
                    color50={color50}
                    variant={type}
                  />
                );
              })}
            </ButtonsWrapper>
          ))}
        </div>
        <ButtonsWrapper>
          {iconButtonSizes.map((item, index) => {
            const id = `icon-${index}`;
            return (
              <div
                className="bg-primary-50 rounded-full flex items-center justify-center text-base"
                key={id}
                style={{
                  height: `${item}px`,
                  width: `${item}px`,
                  color: color,
                }}
              >
                <ThumbsUp
                  size={iconSizes[index]}
                  strokeWidth={strokeWidth}
                  className="ml-px"
                />
              </div>
            );
          })}
        </ButtonsWrapper>
      </div>
    </FormWrapper>
  );
};

export default Preview;

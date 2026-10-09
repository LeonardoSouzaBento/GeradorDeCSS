import { useButtonPageContext } from "@/contexts";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Icon,
} from "@/ui";
import { ButtonsWrapper } from "@/ui/index";
import { Info, ThumbsUp } from "lucide-react";
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
  } = useButtonPageContext();

  return (
    <Card className="relative min-w-0 space-y-4">
      <CardHeader className="border-none mb-0">
        <CardTitle>
          <h3>Prévia</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 w-full min-w-0">
        {badContrast && (
          <Alert data-warn>
            <Icon Icon={Info} />
            <AlertTitle data-warn>Alerta</AlertTitle>
            <AlertDescription data-warn>
              Cores claras demais são ruins para acessibilidade!
            </AlertDescription>
          </Alert>
        )}
        <div className="w-full min-w-0 space-y-4">
          <div className="flex gap-3 overflow-x-auto pb-2.5">
            {buttonTypes.map((type) => (
              <div key={type} className="flex flex-col gap-2 shrink-0 w-max items-start">
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
              </div>
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
      </CardContent>
    </Card>
  );
};

export default Preview;

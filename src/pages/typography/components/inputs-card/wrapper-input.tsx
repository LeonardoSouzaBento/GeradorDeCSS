import { Label } from "@/ui";

export const WrapperInput = ({
  children,
  label,
  htmlFor,
}: {
  children: React.ReactNode;
  label: string;
  htmlFor: string;
}) => {
  return (
    <div className={`flex flex-col gap-[1.05ex]`}>
      <Label htmlFor={htmlFor}>{"Tag p " + label}</Label>
      {children}
    </div>
  );
};

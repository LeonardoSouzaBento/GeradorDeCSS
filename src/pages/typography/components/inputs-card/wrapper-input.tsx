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
    <div className={`flex flex-col gap-1.5`}>
      <label htmlFor={htmlFor} className="mb-px">{"Tag p " + label}</label>
      {children}
    </div>
  );
};

import { Button, Input, InputWrapper, Label, Separator } from '@/ui';
import { ConfigOptionsProps, NUMBER_FIELDS, colorOptions } from './data';

const css = {
  container: `text-sm pointer-events-auto fixed bottom-13 right-2 
      bg-white/94 backdrop-blur-sm shadow-md border border-border/50 p-3 pt-2 w-auto flex flex-col gap-2
      [&>div]:flex [&>div]:gap-2`,
  wrapper: `flex items-end gap-2`,
  inputWrapper: `[&>input]:h-8 w-26`,
};

export function ConfigOptions(props: ConfigOptionsProps) {
  const fieldBindings = {
    lines: { value: props.lines, set: props.setLines },
    gap: { value: props.gap, set: props.setGap },
    opacity: { value: props.opacity, set: props.setOpacity },
  };

  return (
    <div className={css.container}>
      {NUMBER_FIELDS.map((field) => {
        const binding = fieldBindings[field.key];

        return (
          <div className='w-full border-b border-border/66 pb-3' key={field.key}>
            <div className={css.wrapper}>
              <InputWrapper className={css.inputWrapper} gap={0.5}>
                <Label>{field.label}</Label>
                <Input
                  type="number"
                  step={field.step}
                  value={binding.value}
                  onChange={(e) => binding.set(+e.target.value)}
                />
              </InputWrapper>
              {/* Quick buttons inline */}
              <div className="flex gap-1.25 mt-1">
                {field.quick.map((v) => {
                  return (
                    <Button
                      selected={binding.value === v}
                      key={v}
                      data-option
                      variant="ghost"
                      size="icon-sm"
                      className="text-sm-button font-medium"
                      onClick={() => binding.set(v)}>
                      {v}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      {/* Cor */}
      <InputWrapper>
        <Label>Cor</Label>
        <div className="flex gap-2">
          {colorOptions.map((c) => (
            <Button
              key={c.value}
              variant="ghost"
              size="icon-sm"
              title={c.name}
              className="rounded-full"
              onClick={() => props.setColor(c.value)}>
              <span className="block size-4/5 rounded-full" style={{ backgroundColor: c.value }} />
            </Button>
          ))}
        </div>
      </InputWrapper>
    </div>
  );
}

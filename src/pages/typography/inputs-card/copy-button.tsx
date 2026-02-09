import { Icon } from '@/ui/lucide-icon';
import { Check, Copy } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/ui/button';

interface CopyButtonProps {
  output: string;
  secondOutput: string;
  disabled: boolean;
  returnType: string;
}

const css = {
  button: `min-h-10.5 w-full transition-all duration-200 
hover:scale-[1.02] relative`,
  disabled: `bg-gray-200! text-foreground hover:bg-gray-200! hover:text-foreground`,
  warn: `size-full absolute top-0 left-0 z-2 border-destructive-foreground
  text-destructive text-center bg-destructive-foreground flex items-center justify-center
  normal-case rounded-xs small-text`,
};

const CopyButton = ({ output, secondOutput, disabled, returnType }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const [warn, setWarn] = useState('');
  const timeOutRef = useRef<number>(0);
  const outputToCopy = returnType === 'tw' ? output : secondOutput;

  const handleCopy = async () => {
    if (disabled) {
      setWarn('Preencha todos os campos.');
      clearTimeout(timeOutRef.current);
      timeOutRef.current = window.setTimeout(() => setWarn(''), 2100);
      return;
    }
    try {
      await navigator.clipboard.writeText(outputToCopy);
      setCopied(true);
      toast.success('Copiado para área de transferência!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Erro ao copiar');
    }
  };

  return (
    <Button
      disabled={disabled}
      onClick={handleCopy}
      className={`${css.button} ${disabled && css.disabled}`}>
      {warn && (
        <div className={css.warn}>
          <p>{warn}</p>
        </div>
      )}

      {copied ? <Icon Icon={Check} /> : <Icon Icon={Copy} />}

      {warn || copied ? 'Copiado!' : 'Copiar estilos gerados'}
    </Button>
  );
};

export default CopyButton;

import { Button, Icon } from '@/ui/index';
import { ClipboardCopy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

export const CopyButton = ({ toCopy }: { toCopy: string }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(toCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button className='max-w-max' onClick={copyToClipboard}>
      <Icon Icon={copied ? CopyCheck : ClipboardCopy} size="xl" />
      {copied ? 'Copiado!' : 'Copiar CSS'}
    </Button>
  );
};

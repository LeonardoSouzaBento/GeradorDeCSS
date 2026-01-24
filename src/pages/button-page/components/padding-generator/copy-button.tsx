import { iconMd, iconSm } from '@/css/lucideIcons';
import { Button } from '@/ui/index';
import { ClipboardCopy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

const CopyButton = ({ returnString }: { returnString: string }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(returnString);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button className='max-w-max' onClick={copyToClipboard}>
      {copied ? <CopyCheck {...iconMd} /> : <ClipboardCopy {...iconSm} />}
      {copied ? 'Copiado!' : 'Copiar CSS'}
    </Button>
  );
};

export default CopyButton;

import { iconSm } from '@/css/lucideIcons';
import { Button } from '@/ui/index';
import { ClipboardCopy } from 'lucide-react';

const CopyButton = () => {
  return (
    <Button className="w-full">
      <ClipboardCopy {...iconSm} />
      Copiar CSS gerado
    </Button>
  );
};

export default CopyButton;

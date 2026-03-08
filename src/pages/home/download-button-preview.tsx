import { Button, Icon } from '@/ui';
import { Download } from 'lucide-react';
import buttonTesterContent from './button-tester-for-download.tsx?raw';

export const DownloadButtonPreview = () => {
  const handleDownload = () => {
    try {
      // Create a blob with the file content
      const blob = new Blob([buttonTesterContent], { type: 'text/plain;charset=utf-8' });

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'button-tester.tsx';

      // Trigger download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <Button variant="ghost" data-w-full onClick={handleDownload} className="shadow-sm">
      <Icon Icon={Download} size="lg" /> Baixar componente
    </Button>
  );
};
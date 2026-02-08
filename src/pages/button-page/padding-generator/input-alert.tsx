import { StateSetter } from '@/data/typography/types';
import { Alert, AlertDescription, Icon } from '@/ui';
import { TriangleAlert } from 'lucide-react';
import { useEffect } from 'react';

export const InputAlert = ({
  message,
  showAlert,
  setShowAlert,
}: {
  message: string;
  showAlert: boolean;
  setShowAlert: StateSetter<boolean>;
}) => {
  useEffect(() => {
    function getDisplayTime(message: string): number {
      const words = message.split(' ').length;
      const time = Math.max(2000, words * 700 + 1000);
      return time;
    }
    const time = getDisplayTime(message);
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, time);
    return () => clearTimeout(timer);
  }, []);

  if (!showAlert) return null;
  return (
    <Alert variant="destructive" className="mt-4">
      <div className="flex items-center gap-2">
        <Icon Icon={TriangleAlert} strokeWidth={'light'} size="lg" className="mb-px" />
        <AlertDescription>{message}</AlertDescription>
      </div>
    </Alert>
  );
};

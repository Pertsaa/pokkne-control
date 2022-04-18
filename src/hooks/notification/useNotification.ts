import { useEffect, useState } from 'react';

export const useNotification = () => {
  const [notification, setNotification] = useState('');
  const [timeoutId, setTimeoutId] = useState<number>();

  useEffect(() => {
    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setNotification('');
    }, 4000);

    setTimeoutId(id);

    return () => clearTimeout(timeoutId);
  }, [notification]);

  return { notification, setNotification };
};

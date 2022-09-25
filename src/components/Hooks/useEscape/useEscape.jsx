import { useEffect } from 'react';

export const useEscape = (enabled, handler) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const keyboardListener = (e) => {
        if (e.key === 'Escape' && enabled) {
          handler(e);
        }
      };

      document.addEventListener('keydown', keyboardListener);

      return () => {
        document.removeEventListener('keydown', keyboardListener);
      };
    }
  }, [handler]);
};

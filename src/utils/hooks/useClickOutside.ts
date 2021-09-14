import { useEffect } from 'react';

export const useClickOutside = (ref, onClickHandler) => {
  useEffect(() => {
    const eventListener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      onClickHandler(e);
    };

    document.addEventListener('mousedown', eventListener);
    document.addEventListener('touchstart', eventListener);
    return () => {
      document.removeEventListener('mousedown', eventListener);
      document.removeEventListener('touchstart', eventListener);
    };
  }, [ref, onClickHandler]);
};

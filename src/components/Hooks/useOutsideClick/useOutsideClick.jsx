import { useEffect } from 'react';
import PropTypes from 'prop-types';

// Referenced from https://usehooks.com/useOnClickOutside/
export const useOutsideClick = (ref, handler, enabled) => {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window !== `undefined`) {
      const listener = (e) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref || ref.contains(e.target)) {
          return;
        }

        handler(e);
      };

      const keyboardListener = (e) => {
        if (e.key === 'Escape') {
          handler(e);
        }
      };

      document.addEventListener('click', listener);
      document.addEventListener('touchstart', listener);
      document.addEventListener('keydown', keyboardListener);

      return () => {
        document.removeEventListener('click', listener);
        document.removeEventListener('touchstart', listener);
        document.removeEventListener('keydown', keyboardListener);
      };
    }
  }, [ref, handler]);
};

useOutsideClick.propTypes = {
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  handler: PropTypes.func,
  enabled: PropTypes.bool,
};

useOutsideClick.defaultProps = {
  ref: null,
  handler: undefined,
  enabled: true,
};

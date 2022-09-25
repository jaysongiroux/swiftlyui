import { useEffect } from 'react';
import PropTypes from 'prop-types';

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

useEscape.propTypes = {
  enabled: PropTypes.bool,
  handler: PropTypes.func,
};

useEscape.defaultProps = {
  enabled: true,
  handler: undefined,
};

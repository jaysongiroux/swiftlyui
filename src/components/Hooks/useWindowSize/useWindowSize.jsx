import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import defaults from 'lodash/defaults';
import PropTypes from 'prop-types';

// These match the breakpoints in _breakpoints.scss
// lg = Container grid width
export const breakpoints = {
  xs: 414,
  sm: 767,
  md: 1024,
  lg: 1200,
  xl: 1366,
};

const generateKey = (prefix) => {
  return (
    prefix +
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5)
  );
};

const defaultOptions = {
  breakpoints,
  delay: 0,
};

const useWindowSize = (options) => {
  const { breakpoints, delay } = defaults(options, defaultOptions);
  const isClient = typeof window === 'object';
  const isServerRendered = process.env.IS_SERVER_RENDERED;

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  };

  const [key, setKey] = useState(isServerRendered ? generateKey('server') : null);
  const [windowSize, setWindowSize] = useState(getSize);

  const screenWidth = windowSize.width;
  const screenHeight = windowSize.height;

  useEffect(() => {
    if (isClient) {
      // Only re-generate a key if component was server rendered, Gatsby or other ssr projects
      // should set this value to True to resolve possible hydration issues.
      if (isServerRendered) {
        setKey(generateKey('client'));
      }

      const _handleResize = () => {
        setWindowSize(getSize());
      };

      const handleResize = delay ? debounce(_handleResize, delay) : _handleResize;

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount and unmount

  // This mimics the same behavior as the respond mixin in _breakpoints.scss
  const respond = (max) => {
    const maxSize = breakpoints[max];
    if (!maxSize) {
      console.error(`Breakpoint ${max} must be one of ${Object.keys(breakpoints).join(',')}`);
    } else {
      return screenWidth <= maxSize;
    }
  };

  return {
    isScreenSize: respond,
    screenHydrateKey: isServerRendered ? key : null,
    screenWidth,
    screenHeight,
  };
};

useWindowSize.propTypes = {
  options: PropTypes.object,
};

useWindowSize.defaultProps = {
  options: {},
};

export default useWindowSize;

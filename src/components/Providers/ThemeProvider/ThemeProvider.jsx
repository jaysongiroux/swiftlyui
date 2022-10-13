import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext({
  button: {
    primaryColor: null,
    secondaryColor: null,
  },
});

const ThemeProvider = ({ children, theme }) => {
  return <ThemeContext.Provider value={{ ...theme }}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  theme: PropTypes.object,
};

ThemeProvider.defaultProps = {
  theme: {
    button: {
      primaryColor: null,
      secondaryColor: null,
    },
  },
};

export default ThemeProvider;

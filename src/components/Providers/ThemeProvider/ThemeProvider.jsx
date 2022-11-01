import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const themeDefaultValues = {
  button: {
    primaryColor: null,
    secondaryColor: null,
    disabledColor: null,
    disabledSecondaryColor: null,
  },
  checkbox: {
    primaryColor: null,
    secondaryColor: null,
    disabledColor: null,
  },
  radiobutton: {
    primaryColor: null,
    disabledColor: null,
    labelColor: null,
    labelDisabledColor: null,
  },
  radiobuttonset: {
    labelColor: null,
    labelDisabledColor: null,
  },
  textinput: {
    primaryColor: null,
    disabledColor: null,
    labelColor: null,
    inputColor: null,
  },
  spinner: {
    primaryColor: null,
  },
  progressbar: {
    primaryColor: null,
    secondaryColor: null,
  },
  iconprogressbarcircle: {
    primaryColor: null,
    secondaryColor: null,
  },
  dropdownselect: {
    primaryColor: null,
    secondaryColor: null,
    disabledColor: null,
  },
  datetimepicker: {
    primaryColor: null,
    secondaryColor: null,
    disabledColor: null,
  },
  switch: {
    primaryColor: null,
    secondaryColor: null,
    textColor: null,
    selectedTextColor: null,
    disabledTextColor: null,
    disabledColor: null,
  },
};

export const ThemeContext = createContext(themeDefaultValues);

const ThemeProvider = ({ children, theme }) => {
  const themeValues = { ...themeDefaultValues, ...theme };
  return <ThemeContext.Provider value={themeValues}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  theme: PropTypes.object,
};

ThemeProvider.defaultProps = {
  theme: themeDefaultValues,
  children: null,
};

export default ThemeProvider;

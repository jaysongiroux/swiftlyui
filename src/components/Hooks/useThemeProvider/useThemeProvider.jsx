import { useContext } from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import PropTypes from 'prop-types';

export const useThemeProvider = (fieldName) => {
  const theme = useContext(ThemeContext);
  return theme[fieldName];
};

useThemeProvider.propTypes = {
  fieldName: PropTypes.string,
};

useThemeProvider.defaultProps = {
  fieldName: null,
};

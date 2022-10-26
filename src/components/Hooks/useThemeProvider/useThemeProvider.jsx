import { useContext } from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import PropTypes from 'prop-types';

const useThemeProvider = (fieldName) => {
  const theme = useContext(ThemeContext);
  return theme[fieldName];
};

export default useThemeProvider;

useThemeProvider.propTypes = {
  fieldName: PropTypes.string,
};

useThemeProvider.defaultProps = {
  fieldName: null,
};

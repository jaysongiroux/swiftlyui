import react from 'react';
import { useThemeProvider } from './useThemeProvider';
import Button from '../../Forms/Button/Button';
import ThemeProvider from '../../Providers/ThemeProvider/ThemeProvider';

export default {
  title: 'Hooks/useThemeProvider',
  component: useThemeProvider,
  args: {
    fieldName: 'button',
    theme: {
      button: {
        primaryColor: 'black',
        secondaryColor: 'white',
        disabledColor: 'gray',
        disabledSecondaryColor: 'black',
      },
    },
  },
};

export const useThemeProviderExample = ({ ...args }) => {
  const component = () => {
    return <Button>hello</Button>;
  };
  return <ThemeProvider theme={args.theme}>{component()}</ThemeProvider>;
};

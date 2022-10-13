import React from 'react';
import ThemeProvider from './ThemeProvider';
import Button from '../../Forms/Button/Button';

export default {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
  args: {
    theme: {
      button: {
        primaryColor: 'black',
        secondaryColor: 'white',
      },
    },
  },
};

export const ThemeProviderExample = ({ ...args }) => {
  return (
    <ThemeProvider theme={args.theme}>
      <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '10px' }}>
        <Button>Button</Button>
      </div>
    </ThemeProvider>
  );
};

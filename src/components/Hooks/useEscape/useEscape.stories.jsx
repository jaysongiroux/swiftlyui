import React from 'react';
import useEscape from './useEscape';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Hooks/useEscape',
  component: useEscape,
  args: {
    enabled: true,
    handler: () => {
      console.log('Escape Pressed');
    },
  },
};

export const UseEscapeExample = ({ enabled, handler }) => {
  const [{ counter }, updateArgs] = useArgs({ counter: 0 });

  const handleCount = () => updateArgs({ counter: (typeof counter === 'number' ? counter : 0) + 1 });

  useEscape(enabled, handleCount);
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          width: '100px',
          backgroundColor: '#3f51b5',
          padding: '10px',
          color: 'white',
          borderRadius: '2px',
        }}
      >
        Escape pressed: {counter ?? 0} times
      </div>
    </div>
  );
};

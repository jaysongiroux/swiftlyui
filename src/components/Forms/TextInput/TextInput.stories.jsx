// TextInput.stories.js|ts|jsx|tsx

import React, { useState } from 'react';
import { TextInput } from './TextInput';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    className: 'textInputExampleClass',
    type: 'text',
    rows: 1,
    disabled: false,
    placeholder: 'Placeholder',
    label: 'Hello world',
    error: false,
    onChange: () => {},
  },
};

export const SimpleTextInput = ({ onChange,...args }) => {
  const [{ value }, updateArgs] = useArgs();
  return (
    <div style={{ width: '50%' }}>
      <TextInput value={value} onChange={(e) => updateArgs({ value: e })} {...args} />
    </div>
  );
};

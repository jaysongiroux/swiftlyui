// TextInput.stories.js|ts|jsx|tsx

import React from 'react';
import { TextInput } from './TextInput';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Forms/TextInput',
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
    inputStyle: { color: '#3f51b5' },
    style: { color: '#3f51b5' },
    labelStyle: { color: '#b53fb5', fontStyle: 'italic' },
    labelPosition: 'top',
  },
};

export const TextInputExample = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs();
  return (
    <div style={{ width: '50%' }}>
      <TextInput value={value} onChange={(e) => updateArgs({ value: e })} {...args} />
    </div>
  );
};

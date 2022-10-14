// TextInput.stories.js|ts|jsx|tsx

import React from 'react';
import Label from './Label';

export default {
  title: 'Forms/Label',
  component: Label,
  args: {
    disabled: false,
    labelColor: 'blue',
    labelDisabledColor: 'grey',
  },
};

export const LabelExample = ({ ...args }) => {
  return (
    <div style={{ width: '50%' }}>
      <Label {...args}>Label</Label>
    </div>
  );
};

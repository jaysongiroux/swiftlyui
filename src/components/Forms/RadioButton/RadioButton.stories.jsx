import React from 'react';
import { RadioButton } from './RadioButton';

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
  args: {
    className: 'radioButtonExampleClass',
    label: 'Hello World',
    value: 'hello-world',
    checked: false,
    disabled: false,
    required: true,
    onChange: () => {},
  },
};

export const RadioButtonExample = ({ ...args }) => {
  return <RadioButton {...args} />;
};

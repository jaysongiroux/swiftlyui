import React from 'react';
import CheckBox from './CheckBox';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Forms/CheckBox',
  component: CheckBox,
  args: {
    className: 'checkBoxExampleClass',
    label: 'Hello World',
    value: 'hello-world',
    name: 'hello-world',
    onClick: () => {},
  },
};

export const CheckBoxExample = ({ ...args }) => {
  return <CheckBox {...args} />;
};

export const CheckBoxExampleChecked = ({ onClick, ...args }) => {
  const [{ checked }, updateArgs] = useArgs();
  return (
    <CheckBox {...args} checked={checked} onClick={(value, checkedStatus) => updateArgs({ checked: checkedStatus })} />
  );
};

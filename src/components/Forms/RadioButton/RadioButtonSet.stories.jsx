import React from 'react';
import { useArgs } from '@storybook/client-api';
import { RadioButtonSet } from './RadioButtonSet';

export default {
  title: 'Forms/RadioButtonSet',
  component: RadioButtonSet,
  args: {
    className: 'radioButtonSetExampleClass',
    value: 'hello-world',
    label: 'example',
    inline: true,
    disabled: false,
    name: 'example',
    helpTipOptions: {},
    onChange: () => {},
  },
};

export const RadioButtonSetHelpTipExample = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs();
  const options = [
    { label: 'Hello World', value: 'hello-world' },
    { label: 'Hello World 2', value: 'hello-world-2' },
    {
      label: 'Hello World 3 with a somewhat longer text that should wrap without interfering with the helptip',
      value: 'hello-world-3',
      helptip: {
        title: 'hello world 3',
        text: 'this is hello world 3',
        helpTipOptions: { place: 'right' },
      },
    },
  ];

  return <RadioButtonSet value={value} options={options} onChange={(v) => updateArgs({ value: v })} {...args} />;
};

export const RadioButtonSetExample = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs();
  const options = [
    { label: 'Hello World', value: 'hello-world' },
    { label: 'Hello World 2', value: 'hello-world-2' },
    {
      label: 'Hello World 3',
      value: 'hello-world-3',
    },
  ];
  return <RadioButtonSet value={value} options={options} onChange={(v) => updateArgs({ value: v })} {...args} />;
};

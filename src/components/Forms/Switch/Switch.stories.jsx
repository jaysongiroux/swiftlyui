import React from 'react';
import Switch from './Switch';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Forms/Switch',
  component: Switch,
  args: {
    className: 'test',
    label: 'Switch',
    value: 'option1',
    options: [
      { label: 'option 1', value: 'option1' },
      { label: 'option 2', value: 'option2' },
      { label: 'option 3', value: 'option3' },
    ],
    disabled: false,
    onChange: () => {},
  },
};

export const SwitchExample = ({ ...args }) => {
  const [{ value }, updateArgs] = useArgs({ value: false });
  return (
    <div style={{ width: '50%' }}>
      <Switch {...args} value={value} onChange={(v) => updateArgs({ value: v })} />
    </div>
  );
};

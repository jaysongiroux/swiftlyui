import React from 'react';
import DropDownSelect from './DropDownSelect';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Forms/DropDownSelect',
  component: DropDownSelect,
  args: {
    className: 'test',
    label: 'DropDownSelect',
    value: 'option2',
    disabled: false,
    multiple: false,
    dropDownStyles: {},
    dropDownOptionsStyles: {},
    onChange: () => {},
    options: [
      {
        label: 'Option 1',
        value: 'option1',
        disabled: true,
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
      {
        label: 'Option 4',
        value: 'option4',
      },
    ],
  },
};

export const DropDownSelectExample = ({ ...args }) => {
  const [{ value }, updateArgs] = useArgs({ value: 'option2' });

  return (
    <div style={{ width: '50%' }}>
      <DropDownSelect {...args} value={value} onChange={(v) => updateArgs({ value: v })} />
    </div>
  );
};

export const DropDownSelectExampleMultiple = ({ ...args }) => {
  const [{ value }, updateArgs] = useArgs({ value: [{ value: 'option2', label: 'Option 2' }] });

  return (
    <div style={{ width: '50%' }}>
      <DropDownSelect {...args} multiple value={value} onChange={(val) => updateArgs({ value: val })} />
    </div>
  );
};

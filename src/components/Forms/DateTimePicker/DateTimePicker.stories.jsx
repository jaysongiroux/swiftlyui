import React from 'react';
import DateTimePicker from './DateTimePicker';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Forms/DateTimePicker',
  component: DateTimePicker,
  args: {
    className: 'test',
    label: 'DateTimePicker',
    value: new Date(),
    disabled: false,
    onChange: () => {},
  },
};

export const DateTimePickerExample = ({ ...args }) => {
  const [{ value }, updateArgs] = useArgs({ value: new Date() });

  return (
    <div style={{ width: '50%' }}>
      <DateTimePicker {...args} value={value} onChange={(v) => updateArgs({ value: v })}>
        Don't forget to click a date!
      </DateTimePicker>
    </div>
  );
};

export const DateTimePickerExampleDisabled = ({ ...args }) => {
  const [{ value }, updateArgs] = useArgs({ value: new Date() });

  return (
    <div style={{ width: '50%' }}>
      <DateTimePicker {...args} value={value} onChange={(v) => updateArgs({ value: v })} disabled />
    </div>
  );
};

export const DatePickerWithTimeExample = ({ ...args }) => {
  const [{ value }, updateArgs] = useArgs({ value: new Date() });

  return (
    <div style={{ width: '75%' }}>
      <DateTimePicker
        timeInterval={15}
        {...args}
        value={value}
        onChange={(v) => updateArgs({ value: v })}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
};

export const DateTimePickerTimePickerExample = ({ ...args }) => {
  return (
    <div style={{ width: '75%' }}>
      <DateTimePicker
        value={new Date()}
        showTimeSelect
        showTimeSelectOnly
        timeInterval={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        onChange={(v) => updateArgs({ value: v })}
        {...args}
      />
    </div>
  );
};

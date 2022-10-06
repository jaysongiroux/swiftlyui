import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Loaders/Spinner',
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;
export const SpinnerExample = Template.bind({});
SpinnerExample.args = {
  className: 'SpinnerExampleClass',
  color: 'black',
  side: 'small',
};

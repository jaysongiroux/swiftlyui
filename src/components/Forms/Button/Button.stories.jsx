import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  className: 'SimpleButtonExample',
  content: 'Button',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  className: 'customColorsExample',
  buttonColor: 'red',
  contentColor: 'white',
  content: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  className: 'largeExample',
  content: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  className: 'smallExample',
  content: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  className: 'disabledExample',
  content: 'Button',
};

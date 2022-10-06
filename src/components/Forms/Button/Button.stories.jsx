import React from 'react';
import Button from './Button';

export default {
  title: 'Forms/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const ButtonExample = Template.bind({});
ButtonExample.args = {
  className: 'SimpleButtonExample',
  children: 'Button',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  className: 'customColorsExample',
  buttonColor: 'red',
  contentColor: 'white',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  className: 'largeExample',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  className: 'smallExample',
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  className: 'disabledExample',
  children: 'Button',
};

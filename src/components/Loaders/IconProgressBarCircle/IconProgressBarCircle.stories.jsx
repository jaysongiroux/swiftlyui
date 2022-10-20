import React from 'react';
import IconProgressBarCircle from './IconProgressBarCircle';
import { FaBeer } from 'react-icons/fa';
export default {
  title: 'Loaders/IconProgressBarCircle',
  component: IconProgressBarCircle,
  args: {
    className: 'IconProgressBarCircleExampleClass',
    progress: 50,
    size: 200,
  },
};

export const IconProgressBarCircleExample = (args) => <IconProgressBarCircle {...args} />;
export const IconProgressBarCircleWithChildrenExample = (args) => (
  <IconProgressBarCircle {...args} showPercentage={true}>
    <FaBeer size={50} />
  </IconProgressBarCircle>
);

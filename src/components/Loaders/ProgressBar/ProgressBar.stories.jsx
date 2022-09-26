import React from 'react';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'Loaders/ProgressBar',
  component: ProgressBar,
};

const Template = (args) => (
  <div style={{ width: '200px' }}>
    <ProgressBar {...args} />
  </div>
);
export const ProgressBarExample = Template.bind({});
ProgressBarExample.args = {
  className: 'ProgressBarExampleClass',
  steps: 10,
  curStep: 2,
  height: '8px',
};

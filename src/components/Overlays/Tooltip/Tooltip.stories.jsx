import React from 'react';

import { Tooltip } from './Tooltip';

export default {
  title: 'Overlays/Tooltip',
  component: Tooltip,
};

const Template = (args) => (
  <div style={{ display: 'flex', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
    <Tooltip {...args} />
  </div>
);
export const TooltipText = Template.bind({});
TooltipText.args = {
  className: 'TooltipExampleClass',
  place: 'bottom',
  tooltipType: 'dark',
  effect: 'solid',
  hoverElementType: 'info',
  hoverElementSize: '40px',
  hoverElement: 'hover over me',
};

export const TooltipNode = Template.bind({});
TooltipNode.args = {
  className: 'TooltipExampleClass',
  place: 'bottom',
  tooltipType: 'dark',
  effect: 'solid',
  hoverElementType: 'info',
  hoverElementSize: '40px',
  hoverElement: (
    <div
      style={{
        backgroundColor: '#3f51b5',
        width: '100px',
        height: '50px',
        color: 'white',
        padding: '10px',
      }}
    >
      Hover over me
    </div>
  ),
};

export const TooltipIcon = Template.bind({});
TooltipIcon.args = {
  className: 'TooltipExampleClass',
  place: 'bottom',
  tooltipType: 'dark',
  effect: 'solid',
  hoverElementType: 'info',
  hoverElementSize: '40px',
  hoverElement: null,
};

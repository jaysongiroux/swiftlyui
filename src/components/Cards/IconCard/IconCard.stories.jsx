import React from 'react';
import IconCard from './IconCard';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default {
  title: 'Cards/IconCard',
  component: IconCard,
  args: {
    className: 'iconCardExampleClass',
    icon: <AiOutlineInfoCircle />,
    title: 'Hello World',
    style: {
      height: '300px',
    },
  },
};
export const IconCardExample = ({ ...args }) => {
  return (
    <IconCard {...args}>
      <p>This is the contents of an Icon Card</p>
    </IconCard>
  );
};

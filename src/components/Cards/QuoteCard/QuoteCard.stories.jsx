import React from 'react';
import QuoteCard from './QuoteCard';

export default {
  title: 'Cards/QuoteCard',
  component: QuoteCard,
  args: {
    className: 'iconCardExampleClass',
    name: 'Joe Smith',
    location: 'Boston, MA',
    profilePic:
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_thumb-732x549.jpg',
  },
};
export const QuoteCardExample = ({ ...args }) => {
  return (
    <QuoteCard {...args}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </QuoteCard>
  );
};

import React from 'react';
import LinkCard from './LinkCard';

export default {
  title: 'Cards/LinkCard',
  component: LinkCard,
  args: {
    className: 'linkCardExampleClass',
    title: 'Hello World',
    link: 'https://www.google.com',
  },
};

export const LinkCardExample = ({ ...args }) => {
  return (
    <LinkCard {...args}>
      <h2>You can click anywhere in the card</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </LinkCard>
  );
};

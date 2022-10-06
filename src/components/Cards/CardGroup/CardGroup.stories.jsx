import React from 'react';
import IconCard from '../IconCard/IconCard';
import CardGroup from './CardGroup';
import QuoteCard from '../QuoteCard/QuoteCard';
import LinkCard from '../LinkCard/LinkCard';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default {
  title: 'Cards/CardGroup',
  component: CardGroup,
  args: {
    className: 'cardGroupExampleClass',
    title: 'hello world',
    text: 'This is a description',
    titleAlignment: 'left',
    textAlignment: 'left',
    cardAlignment: 'left',
    maxWidth: '1200px',
    cardFit: '50%',
    spacing: 16,
    cardSize: { ...IconCard.size },
  },
};
export const CardGroupIconCardExample = ({ ...args }) => {
  return (
    <CardGroup {...args}>
      <IconCard title="Icon Card" icon={<AiOutlineInfoCircle />}>
        This is a description within IconCard
      </IconCard>
      <IconCard title="Icon Card" icon={<AiOutlineInfoCircle />}>
        This is a description within IconCard
      </IconCard>
      <QuoteCard
        name="Joe Smith"
        location="Boston MA"
        profilePic="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_thumb-732x549.jpg"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </QuoteCard>
      <LinkCard link="www.google.com">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </LinkCard>
    </CardGroup>
  );
};

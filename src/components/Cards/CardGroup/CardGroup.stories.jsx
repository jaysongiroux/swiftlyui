import React from 'react';
import IconCard from '../IconCard/IconCard';
import CardGroup from './CardGroup';
import QuoteCard from '../QuoteCard/QuoteCard';
import LinkCard from '../LinkCard/LinkCard';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import ImageCard from '../ImageCard/ImageCard';

export default {
  title: 'Cards/CardGroup',
  component: CardGroup,
  args: {
    className: 'cardGroupExampleClass',
    title: 'hello world',
    text: 'This is a description',
    titleAlignment: 'left',
    cardAlignment: 'left',
    maxWidth: '1200px',
  },
};
export const CardGroupIconCardExample = ({ ...args }) => {
  return (
    <CardGroup {...args}>
      <IconCard title="Icon Card" icon={<AiOutlineInfoCircle />}>
        This is a description within IconCard
      </IconCard>
      <ImageCard
        imageLink="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        linkText="Click here"
        imageCaption="landscape image"
        link="https://www.google.com"
      >
        <>
          <h3>Learn more here</h3>
          This is some content to read inside the Image Card component. Above is a cool photo of some mountains, river,
        </>
      </ImageCard>
      <QuoteCard
        name="Joe Smith"
        location="Boston MA"
        profilePic="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_thumb-732x549.jpg"
        headline="This is awesome!"
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </span>
      </QuoteCard>
      <LinkCard link="https://www.google.com">
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

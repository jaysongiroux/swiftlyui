import React from 'react';
import ImageCard from './ImageCard';

export default {
  title: 'Cards/ImageCard',
  component: ImageCard,
  args: {
    className: 'imageCardExampleClass',
    imageLink:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    linkText: 'Click here',
    imageCaption: 'landscape image',
    link: 'https://www.google.com',
  },
};

export const ImageCardExample = ({ ...args }) => {
  return (
    <ImageCard {...args}>
      <>
        <h3>Learn more here</h3>
        This is some content to read inside the Image Card component. Above is a cool photo of some mountains, river,
        and a sunset
      </>
    </ImageCard>
  );
};

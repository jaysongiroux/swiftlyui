import React from 'react';
import useWindowSize from './useWindowSize';

export default {
  title: 'Hooks/useWindowSize',
  component: useWindowSize,
};

export const useWindowSizeExample = () => {
  const { screenWidth } = useWindowSize();
  return <>Screen Width: {screenWidth}</>;
};

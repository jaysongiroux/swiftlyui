import React, { useState } from 'react';
import  useOutsideClick from './useOutsideClick';

export default {
  title: 'Hooks/useOutsideClick',
  component: useOutsideClick,
  args: {
    ref: null,
    handler: undefined,
    enabled: true,
  },
};

export const UseOutsideClickExample = ({ enabled }) => {
  const [counter, setCounter] = useState(0);
  const [ref, setRef] = useState();

  const handleClick = () => {
    setCounter(counter + 1);
  };

  useOutsideClick(ref, handleClick, enabled);

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          borderRadius: '2px',
          padding: '10px',
          width: '100px',
          color: 'white',
          backgroundColor: '#3f51b5',
        }}
        ref={setRef}
      >
        click outside of me. Clicked outside: {counter} times
      </div>
    </div>
  );
};

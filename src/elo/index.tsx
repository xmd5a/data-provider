import { useState } from 'react';

export const Component = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      counter: {counter}
      <br />
      <button onClick={() => setCounter((counterVal) => counterVal + 1)} type='button'>
        increase
      </button>
    </div>
  );
};

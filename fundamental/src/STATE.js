import React, { useState } from 'react';

export default function STATE() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className='actionButtons'>
      <button
        type='button'
        className='plusButton'
        onClick={handleIncrement}
        style={{ marginRight: '5px' }}
      >
        +
      </button>
      <button
        type='button'
        className='minusButton'
        onClick={handleDecrement}
        style={{ marginRight: '5px' }}
      >
        -
      </button>
      <button type='button' className='result'>
        Count: {count}
      </button>
    </div>
  );
}

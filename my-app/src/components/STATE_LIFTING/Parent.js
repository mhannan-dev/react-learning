// Parent.jsx
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [dataFromChild, setDataFromChild] = useState(null);
  const handleDataFromChild = (data) => {
    console.log('Data from child:', data);
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child onDataFromChild={handleDataFromChild} />
      {dataFromChild && <p>Data received from child: {dataFromChild}</p>}
    </div>
  );
};

export default Parent;

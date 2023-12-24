import React, { useState } from 'react';

const Child = ({ onDataFromChild }) => {
  const [childData, setChildData] = useState('');

  const sendDataToParent = () => {
    onDataFromChild(childData);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={childData}
        onChange={(e) => setChildData(e.target.value)}
      />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default Child;

import React, { useState } from 'react';

export default function EventHandler() {
    const [changedValue, setChangedValue] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setChangedValue(event.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{changedValue}</p>
        </div>
    );
}

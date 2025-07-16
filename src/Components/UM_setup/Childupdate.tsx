import React from 'react';



function Childupdate({ data, onUpdate }) {
  const changeText = (id) => {
    const newData = data.map(item =>
      item.id === id ? { ...item, label: "Added!!!" } : item
    );
    onUpdate(newData); // send updated array to parent
  };

  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - {item.label}{" "}
            <button onClick={() => changeText(item.id)}>Items</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Childupdate;

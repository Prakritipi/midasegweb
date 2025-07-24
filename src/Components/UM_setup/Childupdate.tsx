import React from 'react';

const Childupdate = ({ data, onUpdate }) => {
  const handleChangeLabel = (id: React.Key | null | undefined) => {
    const updatedData = data.map((item: { id: React.Key | null | undefined; }) =>
      item.id === id ? { ...item, label: "items added!!!" } : item
    );
    onUpdate(updatedData); 
  };

  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {data.map((item: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
          <li key={item.id}>
            {item.name} - {item.label}
            <button onClick={() => handleChangeLabel(item.id)} style={{ marginLeft: "10px" }}>
              items
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Childupdate;

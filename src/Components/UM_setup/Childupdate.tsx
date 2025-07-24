import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const Childupdate = ({ data, onUpdate }) => {
  const handleChangeLabel = (id: any) => {
    const updatedData = data.map((item: { id: any; }) =>
      item.id === id ? { ...item, label: "Added!!!" } : item
    );
    onUpdate(updatedData); 
  };

  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {data.map((item: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
          <li key={item.id}>
            {item.name} - {item.label}
            <button onClick={() => handleChangeLabel(item.id)} style={{ marginLeft: "10px" }}>
              Change Label
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Childupdate;

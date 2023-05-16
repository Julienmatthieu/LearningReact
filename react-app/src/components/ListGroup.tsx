import { useState, useSyncExternalStore } from "react";

function ListGroup() {
  const items = ["New York", "London", "Paris", "Lyon", "Tokyo"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> List </h1>
      <ul className="list-group">
        {items.length === 0 && <h1>No Item Found</h1>}
        {items.map((item, index) => (
          <li
            key={index}
            className={
              "list-group-item " + (selectedIndex === index && "active")
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

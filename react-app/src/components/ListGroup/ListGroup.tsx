import { useState } from "react";
import style from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className={[style.listGroup, style.container].join(" ")}>
        {items.length === 0 && <h1>No Item Found</h1>}
        {items.map((item, index) => (
          <li
            key={index}
            className={
              "list-group-item " + (selectedIndex === index && "active")
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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

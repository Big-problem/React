import { MouseEvent, useState } from "react";

// { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  // Return an array with 2 index (variable, update function)
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 指定event的type (type annotation)
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    // class要改成className
    // 一次只能回傳一個element, 所以用<>包起來
    // 等同於叫react用Fragment包起來
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
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

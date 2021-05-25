import Item from "./item";
import React, { useContext } from "react";
import { ItemContext } from "./context/itemContext";

const ActiveList = (props) => {
  const itemctx = useContext(ItemContext).items;
  const activeItems = itemctx.filter((i) => i.isCompleted === false);

  return (
    <ul className="activeList">
      {activeItems.map((item) => (
        <Item key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default ActiveList;

import Item from "./item";
import React, { useContext } from "react";
import { ItemContext } from "./context/itemContext";

const CompletedList = (props) => {
  const itemctx = useContext(ItemContext).items;
  const activeItems = itemctx.filter((i) => i.isCompleted === true);

  return (
    <ul className="completedList">
      {activeItems.map((item) => (
        <Item key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default CompletedList;

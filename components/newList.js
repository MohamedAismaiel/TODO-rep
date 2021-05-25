import React, { useContext, useRef, useState } from "react";
import { ItemContext } from "./context/itemContext";

const NewList = (props) => {
  const newListRef = useRef();
  const itemctx = useContext(ItemContext).setText;
  const [text, setText] = useState("");
  const statectx = useContext(ItemContext).state;

  const submitItemHandler = (e) => {
    e.preventDefault();
    const newText = newListRef.current.value;
    if (newText.trim() === "") return;
    setText(e.target.value);
    itemctx(newText, Math.random() * 100);
    setText("");
  };
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  const btnClass = statectx
    ? " newlist-btn newlist-btn-light"
    : "newlist-btn-dark newlist-btn";
  const inputClass = statectx
    ? " newlist-input newlist-input-light"
    : "newlist-input newlist-input-dark";

  return (
    <form onSubmit={submitItemHandler} className="newlist ">
      <input
        className={inputClass}
        placeholder="Enter your new item..."
        ref={newListRef}
        type="text"
        value={text}
        onChange={onChangeHandler}
      />
      <button className={btnClass}>Add item</button>
    </form>
  );
};

export default NewList;

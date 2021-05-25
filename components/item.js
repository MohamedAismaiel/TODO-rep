import React, { useContext, useRef, useState } from "react";
import { ItemContext } from "./context/itemContext";

const Item = (props) => {
  const isCompleted = useContext(ItemContext).itemCompleted;
  const removeTex = useContext(ItemContext).removeText;
  const itemIsCompleted = useContext(ItemContext).toggleIsCompleted;
  const modectx = useContext(ItemContext).state;

  const removeTextHandler = () => {
    removeTex(props.id);
  };
  const handler = () => {
    itemIsCompleted(props.id);
  };
  const classes = isCompleted(props.id)[0].isCompleted
    ? "item-form-label labelCompleted"
    : "item-form-label ";

  const labelMode = modectx ? " item-form-label-light" : "item-form-label-dark";

  const checkmarkClass = isCompleted(props.id)[0].isCompleted
    ? "item-form-checkmark checkmarkCompleted"
    : "item-form-checkmark ";

  const checkmarkMode = modectx
    ? "item-form-checkmark-light"
    : "item-form-checkmark-dark";

  const itemClasses = modectx
    ? "item-form-form item-form-form-light"
    : "item-form-form item-form-form-dark";
  return (
    <ul className="item-form ">
      <li className={itemClasses}>
        <input
          onClick={handler}
          className="item-form-checkbox"
          type="checkbox"
        />
        <span className={`${checkmarkClass} ${checkmarkMode}`}></span>
        <label className={`${classes} ${labelMode}`}>{props.text}</label>
        <button
          className="icon icon-cross"
          onClick={removeTextHandler}
        ></button>
      </li>
    </ul>
  );
};

export default Item;

// import React, { useContext, useRef, useState } from "react";
// import { ItemContext } from "./context/itemContext";

// const Item = (props) => {
//   const isCompleted = useContext(ItemContext).itemCompleted;
//   const removeTex = useContext(ItemContext).removeText;
//   const changeOrder = useContext(ItemContext).changeOrder;
//   const itemIsCompleted = useContext(ItemContext).toggleIsCompleted;
//   const [draggin, setDragging] = useState(false);
//   const dragNode = useRef();
//   const dragItem = useRef();

//   const removeTextHandler = () => {
//     removeTex(props.id);
//   };
//   const handler = () => {
//     itemIsCompleted(props.id);
//   };
//   const classes = isCompleted(props.id)[0].isCompleted
//     ? "item-form-label labelCompleted"
//     : "item-form-label ";

//   const checkmarkClass = isCompleted(props.id)[0].isCompleted
//     ? "item-form-checkmark checkmarkCompleted"
//     : "item-form-checkmark ";

//   const handleDragStart = (e, params) => {
//     dragNode.current = e.target;
//     dragItem.current = params;
//     dragNode.current.addEventListener("dragend", handleDragEnd);
//     setTimeout(() => {
//       setDragging(true);
//     }, 0);
//   };

//   const handleDragEnd = (e) => {
//     setDragging(false);
//     // dragNode.current.removeEventListener("dragend", handleDragEnd);
//     dragNode.current = null;
//     dragItem.current = null;
//   };

//   const handleDragenter = (e, params) => {
//     // console.log("entering ", params);
//     const currentItem = dragItem.current;
//     changeOrder(currentItem, params.id);

//     if (e.target.closest(".item-form") !== dragNode.current) {
//       // console.log("different");
//     }
//   };

//   const getStyle = (id) => {
//     if (dragItem.current.id === id) {
//       return "item-form current  ";
//     }
//     return "item-form  ";
//   };

//   return (
//     <ul
//       draggable
//       onDragStart={(e) => {
//         handleDragStart(e, props);
//       }}
//       onDragEnter={
//         props.state
//           ? (e) => {
//               handleDragenter(e, props);
//             }
//           : null
//       }
//       // onDragEnter={props.state ? handleDragenter : null}
//       className={draggin ? getStyle(props.id) : "item-form "}
//     >
//       <li className={"item-form-form"}>
//         <input
//           onClick={handler}
//           className="item-form-checkbox"
//           type="checkbox"
//         ></input>
//         <span className={checkmarkClass}></span>
//         <label className={classes}>{props.text}</label>
//         <button
//           className="icon icon-cross"
//           onClick={removeTextHandler}
//         ></button>
//       </li>
//     </ul>
//   );
// };

// export default Item;

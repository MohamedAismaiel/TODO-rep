import React, { useContext, useRef, useState } from "react";
import { ItemContext } from "./context/itemContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd";

const ItemList = (props) => {
  const itemctx = useContext(ItemContext).items;
  const Orderctx = useContext(ItemContext).orderItems;
  resetServerContext();

  const isCompleted = useContext(ItemContext).itemCompleted;
  const removeTex = useContext(ItemContext).removeText;
  const itemIsCompleted = useContext(ItemContext).toggleIsCompleted;
  const modectx = useContext(ItemContext).state;

  const reorderHandler = (result) => {
    if (!result.destination) return;
    Orderctx(result);
  };
  return (
    <DragDropContext onDragEnd={reorderHandler}>
      <Droppable droppableId="Items">
        {(provided) => (
          <ul
            className="itemlist"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {itemctx.map((item, i) => {
              const removeTextHandler = () => {
                removeTex(item.id);
              };
              const handler = () => {
                itemIsCompleted(item.id);
              };
              const classes = isCompleted(item.id)[0].isCompleted
                ? "item-form-label labelCompleted"
                : "item-form-label ";
              const labelMode = modectx
                ? " item-form-label-light"
                : "item-form-label-dark";

              const checkmarkClass = isCompleted(item.id)[0].isCompleted
                ? "item-form-checkmark checkmarkCompleted"
                : "item-form-checkmark ";
              const checkmarkMode = modectx
                ? "item-form-checkmark-light"
                : "item-form-checkmark-dark";

              const itemClasses = modectx
                ? "item-form-form item-form-form-light"
                : "item-form-form item-form-form-dark";
              return (
                <Draggable key={item.id} draggableId={`${item.id}`} index={i}>
                  {(provided) => (
                    <ul
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      className="item-form "
                    >
                      <li className={itemClasses}>
                        <input
                          onClick={handler}
                          className="item-form-checkbox"
                          type="checkbox"
                        />
                        <span
                          className={`${checkmarkClass} ${checkmarkMode}`}
                        ></span>
                        <label className={`${classes} ${labelMode}`}>
                          {item.text}
                        </label>
                        <button
                          className="icon icon-cross"
                          onClick={removeTextHandler}
                        ></button>
                      </li>
                    </ul>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ItemList;

// import Item from "./item";

// import React, { useContext, useRef, useState } from "react";
// import { ItemContext } from "./context/itemContext";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { resetServerContext } from "react-beautiful-dnd";

// const ItemList = (props) => {
//   const itemctx = useContext(ItemContext).items;
//   const Orderctx = useContext(ItemContext).orderItems;
//   resetServerContext();

//   const reorderHandler = (result) => {
//     Orderctx(result);
//   };
//   return (
//     <DragDropContext onDragEnd={reorderHandler}>
//       <Droppable droppableId="Items">
//         {(provided) => (
//           <ul
//             className="itemlist"
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {itemctx.map((item, i) => {
//               return (
//                 <Draggable key={item.id} draggableId={`${item.id}`} index={i}>
//                   {(provided) => (
//                     <li
//                       {...provided.draggableProps}
//                       ref={provided.innerRef}
//                       {...provided.dragHandleProps}
//                     >
//                       <Item
//                         // key={item.id}
//                         id={item.id}
//                         text={item.text}
//                         index={i}
//                       ></Item>
//                     </li>
//                   )}
//                 </Draggable>
//               );
//             })}
//             {provided.placeholder}
//           </ul>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default ItemList;

import React, { useEffect, useState } from "react";
export const ItemContext = React.createContext({
  items: [],
  setText: (text, id) => {},
  removeText: (id) => {},
  toggleIsCompleted: (id) => {},
  clearCompleted: () => {},
  itemCompleted: () => {},
  orderItems: () => {},
  state: false,
  getState: (state) => {},
});

const ItemProvider = (props) => {
  const [itemText, setItemText] = useState([]);
  const [mode, setMode] = useState(true);

  const storeItem = (item) => {
    localStorage.setItem("items", JSON.stringify(item));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    setItemText(items);
  }, []);

  const setText = (text, id, isCompleted = false) => {
    setItemText((curItems) => {
      curItems.push({ text: text, id: id, isCompleted: isCompleted });

      const updatedItems = [...curItems];
      storeItem(updatedItems);
      return updatedItems;
    });
  };
  const removeText = (id) => {
    setItemText((curItems) => {
      const updatedItems = curItems.filter((i) => i.id !== id);
      storeItem(updatedItems);
      return updatedItems;
    });
  };
  const toggleIsCompleted = (id) => {
    setItemText((curState) => {
      const itemIndex = curState.findIndex((i) => i.id === id);
      const newIsCompletedStatus = !curState[itemIndex].isCompleted;

      const updatedItems = [...curState];
      updatedItems[itemIndex] = {
        ...curState[itemIndex],
        isCompleted: newIsCompletedStatus,
      };
      storeItem(updatedItems);
      return updatedItems;
    });
  };
  const clearCompleted = () => {
    setItemText((curItems) => {
      const updatedItems = curItems.filter((i) => i.isCompleted === false);
      storeItem(updatedItems);
      return updatedItems;
    });
  };
  const itemCompleted = (id) => {
    const item = itemText.filter((i) => i.id === id);
    return item;
  };

  const orderItems = (result) => {
    setItemText((curItems) => {
      const updatedItems = Array.from(curItems);
      const [reorderedItem] = updatedItems.splice(result.source.index, 1);
      updatedItems.splice(result.destination.index, 0, reorderedItem);
      storeItem(updatedItems);
      return updatedItems;
    });
  };
  const getState = (state) => {
    setMode(state);
  };
  return (
    <ItemContext.Provider
      value={{
        setText: setText,
        items: itemText,
        removeText,
        toggleIsCompleted,
        clearCompleted,
        itemCompleted,
        orderItems,
        state: mode,
        getState,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};
export default ItemProvider;

// import React, { useState } from "react";
// export const ItemContext = React.createContext({
//   items: [],
//   setText: (text, id) => {},
//   removeText: (id) => {},
//   toggleIsCompleted: (id) => {},
//   clearCompleted: () => {},
//   itemCompleted: () => {},
//   changeOrder: () => {},
// });

// const ItemProvider = (props) => {
//   const [itemText, setItemText] = useState([]);

//   const setText = (text, id, isCompleted = false) => {
//     setItemText((curItems) => {
//       curItems.push({ text: text, id: id, isCompleted: isCompleted });

//       const updatedItems = [...curItems];
//       return updatedItems;
//     });
//   };
//   const removeText = (id) => {
//     setItemText((curItems) => {
//       const updatedItems = curItems.filter((i) => i.id !== id);
//       return updatedItems;
//     });
//   };
//   const toggleIsCompleted = (id) => {
//     setItemText((curState) => {
//       const itemIndex = curState.findIndex((i) => i.id === id);
//       const newIsCompletedStatus = !curState[itemIndex].isCompleted;

//       const updatedItems = [...curState];
//       updatedItems[itemIndex] = {
//         ...curState[itemIndex],
//         isCompleted: newIsCompletedStatus,
//       };
//       return updatedItems;
//     });
//   };
//   const clearCompleted = () => {
//     setItemText((curItems) => {
//       const updatedItems = curItems.filter((i) => i.isCompleted === false);
//       return updatedItems;
//     });
//   };
//   const itemCompleted = (id) => {
//     const item = itemText.filter((i) => i.id === id);
//     return item;
//   };
//   const changeOrder = (currentItem, id) => {
//     setItemText((curItem) => {
//       let updatedList = JSON.parse(JSON.stringify(curItem));
//       const itemIndex = curItem.findIndex((i) => i.id === id);
//       console.log(currentItem);
//       const currentItemIndex = curItem.findIndex((i) => i.id === currentItem);

//       // updatedList.splice(itemIndex, 0, 2);
//       // console.log(currentItemIndex);
//       // console.log(itemIndex);
//       return updatedList;
//     });
//   };
//   return (
//     <ItemContext.Provider
//       value={{
//         setText: setText,
//         items: itemText,
//         removeText,
//         toggleIsCompleted,
//         clearCompleted,
//         itemCompleted,
//         changeOrder,
//       }}
//     >
//       {props.children}
//     </ItemContext.Provider>
//   );
// };
// export default ItemProvider;

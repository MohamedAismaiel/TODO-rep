import { useContext, useState } from "react";
import { ItemContext } from "./context/itemContext";

const Logo = () => {
  const [icon, setIcon] = useState(false);
  const ctx = useContext(ItemContext).getState;

  const toggleIcon = () => {
    setIcon((curState) => !curState);
    ctx(icon);
  };
  const iconClass = icon ? "icon icon-sun" : "icon icon-moon";

  return (
    <div className="logo">
      <span className="todo">TODO</span>
      <span onClick={toggleIcon} className={iconClass}></span>
    </div>
  );
};
export default Logo;

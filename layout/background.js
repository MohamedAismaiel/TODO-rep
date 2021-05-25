import { useContext } from "react";
import { ItemContext } from "../components/context/itemContext";

const Background = () => {
  const ctx = useContext(ItemContext).state;
  const classes= ctx?'background background-light':'background background-dark'
  return <div className={classes}></div>;
};
export default Background;

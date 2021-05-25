import { useContext } from "react";
import { ItemContext } from "../components/context/itemContext";

const Layout = (props) => {
  const ctx = useContext(ItemContext).state;
  const classes = ctx ? "layout layout-light" : "layout layout-dark";
  return <main className={classes}>{props.children}</main>;
};

export default Layout;

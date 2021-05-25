import { Fragment } from "react";
import ItemList from "../components/itemList";

const HomePage = () => {
  return (
    <Fragment>
      <ItemList />
      <h2 className="text">Drag and drop to reorder the list</h2>
    </Fragment>
  );
};
export default HomePage;

import { Fragment } from "react";
import ItemList from "../components/itemList";
import Head from "next/head";
const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>TODO APP</title>
        <meta name="description" content="Make your own TODO list" />
      </Head>
      <ItemList />
      <h2 className="text">Drag and drop to reorder the list</h2>
    </Fragment>
  );
};
export default HomePage;

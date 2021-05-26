import Head from "next/head";
import { Fragment } from "react";
import ActiveList from "../components/activeList";

const Active = () => {
  return (
    <Fragment>
      <Head>
        <title>TODO APP</title>
        <meta name="description" content="Filter your active tasks" />
      </Head>
      <ActiveList />
    </Fragment>
  );
};
export default Active;

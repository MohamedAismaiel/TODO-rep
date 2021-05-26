import Head from "next/head";
import { Fragment } from "react";
import CompletedList from "../components/completedList";

const Completed = () => {
  return (
    <Fragment>
      <Head>
        <title>TODO APP</title>
        <meta name="description" content="Filter your completed tasks" />
      </Head>
      <CompletedList />
    </Fragment>
  );
};
export default Completed;

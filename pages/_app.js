import Layout from "../layout/layout";
import "../styles/globals.scss";
import Navigation from "../components/navigation";
import Background from "../layout/background";
import Logo from "../components/logo";
import NewList from "../components/newList";
import Item from "../components/item";
import ItemProvider, { ItemContext } from "../components/context/itemContext";
import { useContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ItemProvider>
      <Layout>
        <Background />
        <Logo />
        <NewList />
        <Navigation />
        <Component {...pageProps} />
      </Layout>
    </ItemProvider>
  );
}

export default MyApp;

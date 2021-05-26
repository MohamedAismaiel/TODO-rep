import Link from "next/link";
import { useContext } from "react";
import { ItemContext } from "./context/itemContext";
import { useRouter } from "next/router";
const Navigation = () => {
  const items = useContext(ItemContext).items;
  const clearComp = useContext(ItemContext).clearCompleted;
  // const leftItems = 0;
  const leftItems = items.filter((i) => i.isCompleted === false);
  const clearCompletedhandler = () => {
    clearComp();
  };
  const modectx = useContext(ItemContext).state;
  const router = useRouter().pathname;
  const AllClasses = router === "/" ? " nav-actions-all-active  " : " ";

  const ActiveClasses =
    router === "/active" ? " nav-actions-active-active " : " ";

  const activeMode = modectx
    ? " nav-actions-active nav-actions-active-light"
    : "nav-actions-active nav-actions-active-dark";

  const CompletedClasses =
    router === "/completed" ? " nav-actions-completed-active " : " ";
  const compMode = modectx
    ? " nav-actions-completed nav-actions-completed-light"
    : "nav-actions-completed nav-actions-completed-dark";
  const navClass = modectx ? "nav nav-light" : "nav nav-dark";

  const allMode = modectx
    ? "nav-actions-all-light nav-actions-all"
    : "nav-actions-all-dark nav-actions-all";

  const btnMode = modectx ? " nav-btn nav-btn-light" : "nav-btn nav-btn-dark";
  return (
    <section className="navbar">
      <ul className={navClass}>
        <li className="left-items">{`${leftItems.length} Items left`}</li>
        <div className="nav-actions">
          <li className={`${AllClasses} ${allMode}`}>
            <Link href="/">All</Link>
          </li>
          <li className={`${ActiveClasses} ${activeMode}`}>
            <Link href="/active"> Active</Link>
          </li>
          <li className={`${CompletedClasses} ${compMode}`}>
            <Link href="/completed">Completed</Link>
          </li>
        </div>
        <li>
          <button onClick={clearCompletedhandler} className={btnMode}>
            Clear Completed
          </button>
        </li>
      </ul>
    </section>
  );
};
export default Navigation;

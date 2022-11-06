import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
//import { AppContext } from "./context";
function Home() {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show Modal
      </button>
    </main>
  );
}

export default Home;

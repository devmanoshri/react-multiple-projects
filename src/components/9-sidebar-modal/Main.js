import React from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import "../../style/9-sidebar-modal.css";
import { AppProvider } from "./context";
function Main() {
  return (
    <>
      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </>
  );
}

export default Main;

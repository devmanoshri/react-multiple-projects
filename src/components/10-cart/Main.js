import React from "react";
import "../../style/10-cart.css";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { AppProvider } from "./context";

function Main() {
  return (
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>
  );
}

export default Main;

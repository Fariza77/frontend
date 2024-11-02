import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./style.scss";

export default function Navigation() {
  const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);

  return (
    <div>
      <header>
        <div
          className={
            burgerMenuOpened
              ? "burger-menu-wrapper opened"
              : "burger-menu-wrapper"
          }
        >
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </div>
        <input type="checkbox" id="burger-menu-toggler" />
        <Navbar />
      </header>

      <div id="outlet">
        <Outlet />
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

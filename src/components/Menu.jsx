import React from "react";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";

const Menu = () => {
  const { pathname } = window.location;
  return (
    <>
      <menu>
        <nav>
          <a href="./">Home</a>
        </nav>
        <nav>
          <a href="./produtos">Produtos</a>
        </nav>
      </menu>
      {pathname === "/" ? <Home /> : <Produtos />}
    </>
  );
};

export default Menu;

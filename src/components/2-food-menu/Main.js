import React, { useState } from "react";
import "../../style/2-food-menu.css";
import FoodData from "../../data/2-food-menu-data";
import Category from "./Category";
import Menu from "./Menu";

export default function Main() {
  const [menuItems, setMenuItems] = useState(FoodData);
  const [categories, setCategories] = useState({});

  return (
    <main>
      <section className=" menu section">
        <div className="title">
          <h2>Menu Items</h2>
          <div className="underline"></div>
        </div>
        <Category />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

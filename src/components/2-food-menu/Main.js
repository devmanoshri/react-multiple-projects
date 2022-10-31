import React, { useState } from "react";
import "../../style/2-food-menu.css";
import FoodData from "../../data/2-food-menu-data";
import Category from "./Category";
import Menu from "./Menu";

const uniqueCategories = [
  "all",
  ...new Set(FoodData.map((item) => item.category)),
];

export default function Main() {
  const [menuItems, setMenuItems] = useState(FoodData);
  const [categories, setCategories] = useState(uniqueCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(FoodData);
      return;
    }
    const newItems = FoodData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className=" menu section">
        <div className="title">
          <h2>Menu Items</h2>
          <div className="underline"></div>
        </div>
        <Category filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

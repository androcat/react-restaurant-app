import MenuItem from "./MenuItem";
import { useState, Fragment } from "react";
import { nanoid } from "nanoid";

function MenuList({ addOrderToCart, INITIAL_DATA }) {
  const [menuItems] = useState(INITIAL_DATA);

  const menuItemsHTML = menuItems.map((item, index) => (
    <MenuItem key={item.id} item={item} addOrderToCart={addOrderToCart} />
  ));

  return <ul>{menuItemsHTML}</ul>;
}

export default MenuList;

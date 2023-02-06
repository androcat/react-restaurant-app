import MenuItem from "./MenuItem";
import { useState } from "react";

function MenuList({ addOrderToCart, INITIAL_DATA }) {
  const [menuItems] = useState(INITIAL_DATA);

  const menuItemsHTML = menuItems.map((item) => (
    <>
      <MenuItem key={item.id} item={item} addOrderToCart={addOrderToCart} />
      <button
        key={item.id}
        onClick={() => addOrderToCart(item)}
        type="button"
        className="btn btn-outline-dark"
      >
        add
      </button>
    </>
  ));

  return <ul>{menuItemsHTML}</ul>;
}

export default MenuList;

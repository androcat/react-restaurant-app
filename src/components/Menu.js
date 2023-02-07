import MenuList from "./MenuList";
import { nanoid } from "nanoid";

function Menu({ addOrderToCart, INITIAL_DATA }) {
  return (
    <div className="card mt-5">
      <h1>Menu</h1>
      <MenuList addOrderToCart={addOrderToCart} INITIAL_DATA={INITIAL_DATA} />
    </div>
  );
}

export default Menu;

import MenuList from "./MenuList";

function Menu({ addOrder }) {
  return (
    <div className="card mt-5">
      <h1>Menu</h1>
      <MenuList addOrder={addOrder} />
    </div>
  );
}

export default Menu;

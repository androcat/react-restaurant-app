function MenuItem({ item, addOrderToCart }) {
  return (
    <li className="menu-item">
      {item.name} ... ${item.price}{" "}
    </li>
  );
}

export default MenuItem;

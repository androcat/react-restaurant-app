function MenuItem({ item, addOrderToCart }) {
  return (
    <li className="menu-item">
      {item.name} ... ${item.price}{" "}
      <button
        onClick={() => addOrderToCart(item)}
        type="button"
        className="btn btn-outline-dark"
      >
        add
      </button>
    </li>
  );
}

export default MenuItem;

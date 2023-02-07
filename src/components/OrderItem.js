function OrderItem({ item, deleteItem }) {
  return (
    <li className="order-item">
      {item.quantity}x {item.name} ... ${item.price * item.quantity}
      <button
        onClick={() => deleteItem(item.id)}
        type="button"
        className="btn btn-outline-dark"
      >
        delete
      </button>
    </li>
  );
}

export default OrderItem;

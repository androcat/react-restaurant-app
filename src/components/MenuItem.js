function MenuItem({ item, addOrder }) {
  const addOrderToCart = () => {
    console.log(item);

    // const newOrder = {
    //   id,
    //   name,
    //   price,
    // };

    // addOrder(newOrder);
  };

  return (
    <li className="menu-item">
      {item.name} ... ${item.price}{" "}
      <button onClick={addOrderToCart} className="btn btn-outline-dark">
        add
      </button>
    </li>
  );
}

export default MenuItem;

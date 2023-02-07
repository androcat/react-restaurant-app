import OrderItem from "./OrderItem";

function Order({ order, deleteItem }) {
  const orderHTML = order.map((item) => (
    <OrderItem key={item.id} item={item} deleteItem={deleteItem} />
  ));
  let orderTotal = order
    .map((item) => item.price * item.quantity)
    .reduce((total, currentValue) => total + currentValue, 0);

  return (
    <div className="card mt-5">
      <h1>Order</h1>
      {orderHTML}
      <p>Total: ${orderTotal}</p>
    </div>
  );
}

export default Order;

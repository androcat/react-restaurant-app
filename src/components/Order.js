import MenuItem from "./MenuItem";

function Order({ order }) {
  const orderHTML = order.map((item) => (
    <>
      <MenuItem key={item.id} item={item} />
    </>
  ));
  return (
    <div className="card mt-5">
      <h1>Order</h1>
      {orderHTML}
    </div>
  );
}

export default Order;

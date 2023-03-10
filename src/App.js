import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Order from "./components/Order";

const INITIAL_DATA = [
  {
    id: 1,
    name: "Rosemary Focaccia",
    price: 20,
    quantity: 0,
  },
  {
    id: 2,
    name: "Bocconcini Pizza",
    price: 22,
    quantity: 0,
  },
  {
    id: 3,
    name: "Athenian Leg of Lamb",
    price: 25,
    quantity: 0,
  },
  {
    id: 4,
    name: "Bistecca alla Florentina",
    price: 27,
    quantity: 0,
  },
  {
    id: 5,
    name: "Bocconcini Salad",
    price: 25,
    quantity: 0,
  },
  {
    id: 6,
    name: "Orze and Zucchini Salad",
    price: 28,
    quantity: 0,
  },
  {
    id: 7,
    name: "Panzanella Salad",
    price: 25,
    quantity: 0,
  },
  {
    id: 8,
    name: "Antipasto Pasta Salad",
    price: 18,
    quantity: 0,
  },
];

function App() {
  const [order, setOrder] = useState([]);
  var total = 0;
  const addOrderToCart = (item) => {
    console.log(item);

    total = item.price + total;

    if (item.quantity === 0) {
      item.quantity++;
      setOrder([...order, item]);
    } else {
      item.quantity++;
      setOrder([...order]);
    }

    console.log(total);
  };

  const deleteItem = (id) => {
    console.log(id);
    order.splice(order.indexOf(id), 1);
  };

  return (
    <div className="container">
      <Menu
        // addOrder={addOrder}
        INITIAL_DATA={INITIAL_DATA}
        addOrderToCart={addOrderToCart}
      />
      <Order order={order} deleteItem={deleteItem} />
    </div>
  );
}

export default App;

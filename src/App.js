import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Order from "./components/Order";

const INITIAL_DATA = [
  {
    id: 1,
    name: "Rosemary Focaccia",
    price: 20,
  },
  {
    id: 2,
    name: "Bocconcini Pizza",
    price: 22,
  },
  {
    id: 3,
    name: "Athenian Leg of Lamb",
    price: 25,
  },
  {
    id: 4,
    name: "Bistecca alla Florentina",
    price: 27,
  },
  {
    id: 5,
    name: "Bocconcini Salad",
    price: 25,
  },
  {
    id: 6,
    name: "Orze and Zucchini Salad",
    price: 28,
  },
  {
    id: 7,
    name: "Panzanella Salad",
    price: 25,
  },
  {
    id: 8,
    name: "Antipasto Pasta Salad",
    price: 18,
  },
];

function App() {
  const [order, setOrder] = useState([]);

  const addOrderToCart = (item) => {
    console.log(item);
    setOrder([...order, item]);
  };

  return (
    <div className="container">
      <Menu
        // addOrder={addOrder}
        INITIAL_DATA={INITIAL_DATA}
        addOrderToCart={addOrderToCart}
      />
      <Order order={order} />
    </div>
  );
}

export default App;

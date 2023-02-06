import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Order from "./components/Order";

function App() {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) = {
    setOrders([...orders, order]);
  }

  return (
    <div className="container">
      <Menu addOrder={addOrder} />
      <Order orders={orders} />
    </div>
  );
}

export default App;

function MenuItem({ item }) {
  return (
    <li className="menu-item">
      {item.name} {item.price} <button>add</button>
    </li>
  );
}

export default MenuItem;

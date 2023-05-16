function ListGroup() {
  const items = ["NY", "SF", "London", "Paris", "Lyon"];

  return (
    <>
      <h1> List </h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

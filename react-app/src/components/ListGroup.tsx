function ListGroup() {
  let items = ["NY", "SF", "London", "Paris", "Lyon"];
  //items = [];

  return (
    <>
      <h1> List </h1>
      <ul className="list-group">
        {items.length === 0 && <h1>No Item Found</h1>}
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

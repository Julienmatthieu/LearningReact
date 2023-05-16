function ListGroup() {
  let items = ["NY", "SF", "London", "Paris", "Lyon"];
  //  items = [];

  function getItems() {
    return items.map((item) => (
      <li key={item} className="list-group-item">
        {item}
      </li>
    ));
  }

  function noItems() {
    return <p>No Items Found</p>;
  }

  return (
    <>
      <h1> List </h1>
      <ul className="list-group">
        {items.length !== 0 ? getItems() : <p>No Items Found</p>}
      </ul>
    </>
  );
}

export default ListGroup;

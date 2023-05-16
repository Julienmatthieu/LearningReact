import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "London", "Paris", "Lyon", "Tokyo"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;

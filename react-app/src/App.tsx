import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        This is a button 3
      </Button>
      <Alert>
        <h1>Hello World</h1>
      </Alert>
    </div>
  );
}

export default App;

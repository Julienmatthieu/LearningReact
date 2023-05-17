import { useState } from "react";
import Drink from "./components/Drink/Drink";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const items = ["Lyon", "Paris", "Londre", "Milan"];

  return (
    <div>
      <Drink></Drink>
    </div>
  );
}

export default App;

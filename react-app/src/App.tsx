import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const items = ["Lyon", "Paris", "Londre", "Milan"];

  return (
    <div>
      <Like onClick={() => console.log("Clicked")}></Like>
    </div>
  );
}

export default App;

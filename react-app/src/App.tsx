import { useState } from "react";
import { Bug } from "./components/Bug/Bug";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const items = ["Lyon", "Paris", "Londre", "Milan"];

  return (
    <div>
      <Bug></Bug>
    </div>
  );
}

export default App;

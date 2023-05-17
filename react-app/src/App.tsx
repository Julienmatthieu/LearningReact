import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Person from "./components/Person/Person";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const items = ["Lyon", "Paris", "Londre", "Milan"];

  return (
    <div>
      <Person></Person>
    </div>
  );
}

export default App;

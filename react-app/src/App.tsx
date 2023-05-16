import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { IoIosAirplane } from "react-icons/io";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const items = ["Lyon", "Paris", "Londre", "Milan"];

  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={() => console.log("Clicked")}
      ></ListGroup>
      <IoIosAirplane color="blue" size={40}>
        {" "}
      </IoIosAirplane>
    </div>
  );
}

export default App;

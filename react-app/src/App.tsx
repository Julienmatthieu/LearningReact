import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fake data website
    // 'then will be executed when the promess is resolve
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data[0].name));
  });

  return <div></div>;
}

export default App;

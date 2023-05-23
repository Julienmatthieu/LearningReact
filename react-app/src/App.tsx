import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fake data website
    // 'then will be executed when the promess is resolve
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>User: {user.name}</li>
      ))}
    </ul>
  );
}

export default App;

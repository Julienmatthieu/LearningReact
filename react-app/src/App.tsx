import { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(
    /*we can not pass an async funct here*/ () => {
      // get -> promise -> res / error
      // get -> await promise -> res / error
      const fetchUsers = async () => {
        try {
          const res = await axios.get<User[]>(
            "https://jsonplaceholder.typicode.com/zusers"
          );
          setUsers(res.data);
        } catch (err) {
          setError((err as AxiosError).message);
        }
      };
      fetchUsers();
    },
    []
  );

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>User: {user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

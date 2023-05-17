import { useState } from "react";

const Person = () => {
  const [person, setPersonne] = useState({
    firstName: "Julien",
    lasttName: "Bogiraud",
  });
  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      {person.firstName} - {person.lasttName}
    </div>
  );
};

export default Person;

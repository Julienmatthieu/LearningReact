import { useState } from "react";

export const Bug = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: " bug 1", fixed: false },
    { id: 2, title: " bug 2", fixed: false },
  ]);

  const handleClick = (id: number) => {
    setBugs(bugs.map((bug) => (bug.id == id ? tmp : bug)));
  };

  return (
    <div>
      Bug
      <button onClick={() => handleClick(1)}>Fixing</button>
      {String(bugs[1].fixed)}
    </div>
  );
};

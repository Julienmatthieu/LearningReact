import { useState } from "react";

export const Bug = () => {
  const [bugs, setBugs] = useState([
    { id: 0, title: " bug 1", fixed: false },
    { id: 1, title: " bug 2", fixed: false },
    { id: 2, title: " bug 3", fixed: false },
    { id: 3, title: " bug 4", fixed: false },
  ]);

  const handleClick = (id: number) => {
    console.log("here");
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: !bug.fixed } : bug))
    );
  };

  return (
    <div>
      Bug
      <button onClick={() => handleClick(1)}>Fixing</button>
      {bugs.map((bug) => (
        <p>
          Bug id: {bug.id} and Fixed: {String(bug.fixed)}
        </p>
      ))}
    </div>
  );
};

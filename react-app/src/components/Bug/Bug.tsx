import { useState } from "react";
import { Immer, produce } from "immer";

export const Bug = () => {
  const [bugs, setBugs] = useState([
    { id: 0, title: " bug 1", fixed: false },
    { id: 1, title: " bug 2", fixed: false },
    { id: 2, title: " bug 3", fixed: false },
    { id: 3, title: " bug 4", fixed: false },
  ]);

  const handleClick = (id: number) => {
    console.log("here");
    /*setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: !bug.fixed } : bug))
    );*/
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      Bug
      <button onClick={() => handleClick(1)}>Fixing</button>
      {bugs.map((bug) => (
        <p key={bug.id}>
          Bug id: {bug.id} and Fixed: {String(bug.fixed)}
        </p>
      ))}
    </div>
  );
};

import { useState } from "react";

function Game() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jb",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <button key="key" onClick={handleClick}>
      {game.player.name}
    </button>
  );
}

export default Game;

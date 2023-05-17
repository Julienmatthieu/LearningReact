import React, { useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Paysane",
    toppings: ["Lardon"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Oignon"] });
  };

  return (
    <>
      <h1>{pizza.name}</h1>
      <button onClick={handleClick}>Add</button>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </>
  );
};

export default Pizza;

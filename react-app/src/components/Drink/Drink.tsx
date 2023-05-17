import { useState } from "react";

const Drink = () => {
  const [beverage, setBeverage] = useState({
    name: "Coffe",
    price: 5,
  });

  const handlerClick = () => {
    setBeverage({ ...beverage, price: beverage.price + 1 });
  };

  return (
    <div>
      {beverage.name} price is: {beverage.price}{" "}
      <button onClick={handlerClick}>Add</button>
    </div>
  );
};

export default Drink;

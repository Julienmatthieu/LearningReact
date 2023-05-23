import React, { useState, useEffect } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  // 2nd param set the variables to watch for rerender. Givin an empty one will trigger the hook only once.
  // Here it will rerender when category change
  useEffect(() => {
    console.log("Fetching Product in " + category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList {products}</div>;
};

export default ProductList;

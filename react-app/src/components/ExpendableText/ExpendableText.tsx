import React, { Children, useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpendableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpended, setisExpended] = useState(false);
  const handleClick = () => {
    setisExpended(!isExpended);
  };

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpended ? children : children.substring(0, maxChars);
  return (
    <>
      <p>
        {text}...
        <button onClick={handleClick}>{isExpended ? "Less" : "More"}</button>
      </p>
    </>
  );
};

export default ExpendableText;

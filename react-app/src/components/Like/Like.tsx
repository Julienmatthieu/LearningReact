import { useState } from "react";
import styles from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
  size?: number;
}

const Like = ({ onClick, size = 30 }: Props) => {
  const [status, setStatus] = useState(false);
  function handlerClick() {
    console.log(size);
    setStatus(!status);
    onClick();
  }

  if (status)
    return (
      <AiFillHeart
        className={styles.active}
        size={size}
        onClick={handlerClick}
      ></AiFillHeart>
    );
  else
    return <AiOutlineHeart size={size} onClick={handlerClick}></AiOutlineHeart>;
};

export default Like;

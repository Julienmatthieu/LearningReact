import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "danger"
    | "secondary"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

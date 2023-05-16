import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;

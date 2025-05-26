import "./AlertBox.css";
import { CrossIcon, CheckIcon, ExclamationIcon } from "./icons";
import React from "react";
const AlertBox = ({ text, color, icon }) => {
  const style = {
    backgroundColor: color,
  };

  const RenderIcon = () => {
    switch (icon) {
      case "cross":
        return <CrossIcon />;
      case "check":
        return <CheckIcon />;
      case "exclamation":
        return <ExclamationIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="alert-box" style={style}>
      <div className="icons">{RenderIcon()}</div>
      <span className="alert-text">{text}</span>
    </div>
  );
};

export default AlertBox;

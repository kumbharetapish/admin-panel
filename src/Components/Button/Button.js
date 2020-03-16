import React from "react";
import ButtonStyle from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = props => {
  return (
    <Link to = {props.directionLink  }  className={ButtonStyle.buttonWrapper} onClick={props.onClickFun}>
      <h1 className={ButtonStyle.buttonName}> {props.name} </h1>
    </Link>
  );
};
export default Button;

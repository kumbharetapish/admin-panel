import React from "react";
import cartStyle from "./Card.module.css";
import promise from "redux-promise-middleware";
const Cart = props => {
  return (
    <div className={cartStyle.cart}>
      <div className={cartStyle.imgWrapper}>
        <img src={props.pic} alt={props.id} className={cartStyle.img} />
      </div>

      <div className={cartStyle.msgWrapper}>
       
          <p>
            <strong>{props.name}</strong> and <strong>{props.other} </strong>
            {props.o} <a href="/">{props.link}</a> {props.finish}.
          </p>
    
        <p className={cartStyle.msgTime} > {props.time} ago. </p>
      </div>
    </div>
  );
};
export default Cart;

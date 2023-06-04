import CartIcon from "../Cart/CartIcon";
import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  const {items} = cartCtx;

  const btnClasses = `${classes.button}  ${buttonIsHighLighted ? classes.bump : ''}`;
  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setButtonIsHighLighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighLighted(false);
    },300);

    return (() => {
      clearTimeout(timer);
    })
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

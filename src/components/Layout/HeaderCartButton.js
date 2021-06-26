import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [animateButton, setAnimateButton] = useState(false);
  // const numberOfItemsInCart = ctx.items.reduce((currentNumber, item) => {
  //   return currentNumber + item.amount;
  // }, 0);

  const totalAmount = ctx.totalAmount.toFixed(2);

  const buttonClasses = `${classes.button} ${
    animateButton ? classes.bump : ''
  }`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setAnimateButton(true);
    const timer = setTimeout(() => {
      setAnimateButton(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{`$ ${totalAmount}`}</span>
    </button>
  );
};

export default HeaderCartButton;

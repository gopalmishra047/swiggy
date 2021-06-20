import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = [
    {
      id: 'C1',
      name: 'Sushi',
      amount: 2,
      price: 12.99,
    },
  ];

  const cartListItems = cartItems.map((item) => <li>{item.name}</li>);

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes['cart-items']}>{cartListItems}</ul>
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>$ 35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

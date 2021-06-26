import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const isCartEmpty = cartContext.items.length < 1;

  const addCartItemHandler = (item) => {};
  const removeCartItemHandler = (id) => {};

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes['cart-items']}>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addCartItemHandler.bind(null, item.id)}
            onRemove={removeCartItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        {!isCartEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

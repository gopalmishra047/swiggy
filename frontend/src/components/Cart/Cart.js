import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = props => {
  const cartContext = useContext(CartContext);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const isCartEmpty = cartContext.items.length < 1;

  const addCartItemHandler = item => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = id => {
    cartContext.removeItem(id);
  };
  const checkoutFormHandler = () => {
    setShowCheckoutForm(true);
  };

  const submitOrderHandler = orderData => {
    fetch("http://localhost:8000/order/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: orderData.name,
        street: orderData.street,
        postalCode: orderData.postal,
        city: orderData.city,
        // mealID: cartContext.items.id,
        // quantity: cartContext.items.amount,
        totalPrice: cartContext.totalAmount
      })
    });
  };

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {cartContext.items.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addCartItemHandler.bind(null, item)}
            onRemove={removeCartItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      {!isCartEmpty && showCheckoutForm && (
        <Checkout onCancel={props.onHideCart} onConfirm={submitOrderHandler} />
      )}
      <div className={classes.actions}>
        {!showCheckoutForm && (
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
        )}
        {!isCartEmpty && !showCheckoutForm && (
          <button className={classes.button} onClick={checkoutFormHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

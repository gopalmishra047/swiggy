import React from 'react';

const CartItem = (props) => {
  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span>{props.price}</span>
          <span>x{props.amount}</span>
        </div>
      </div>
      <div>
        <button onClick={props.onremove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

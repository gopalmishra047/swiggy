import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
  getItem: id => {}
});

export default CartContext;

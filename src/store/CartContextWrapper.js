import { useReducer } from 'react';
import CartContext from './cart-context';

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      items: state.items.concat(action.item),
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    return {};
  }
  return { items: [], totalAmount: 0 };
};

const CartContextWrapper = (props) => {
  const addItemHandler = (item) => {
    dispatchCart({ type: 'ADD_ITEM', item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: 'REMOVE_ITEM', id: id });
  };

  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextWrapper;

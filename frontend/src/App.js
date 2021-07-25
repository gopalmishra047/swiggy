import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContextWrapper from './store/CartContextWrapper';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartContextWrapper>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {showCart && <Cart onHideCart={hideCartHandler} />}
    </CartContextWrapper>
  );
}

export default App;

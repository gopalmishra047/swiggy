import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <React.Fragment>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {showCart && <Cart onHideCart={hideCartHandler} />}
    </React.Fragment>
  );
}

export default App;

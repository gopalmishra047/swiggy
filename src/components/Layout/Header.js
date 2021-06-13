import React from 'react';
import mealsImage from '../../assets/meals.jpg';

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt='delecious meals'></img>
      </div>
    </React.Fragment>
  );
};

export default Header;

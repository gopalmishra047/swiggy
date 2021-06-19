import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      {/* <input /> */}
      <Input
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          maz: '5',
          step: '1',
          default: '1',
        }}
      ></Input>
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;

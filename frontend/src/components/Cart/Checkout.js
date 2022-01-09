import React, { useState } from "react";
import classes from "./Checkout.module.css";
import checkoutValidation from "../../Utils/checkoutValidation";

const Checkout = props => {
  const [values, setValues] = useState({
    name: "",
    street: "",
    postal: "",
    city: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const confirmHandler = event => {
    event.preventDefault();
    setErrors(checkoutValidation(values));
    // if (errors !== undefined) {
    //   return;
    // }
    props.onConfirm(values);
  };

  const nameDivClass = `${classes.control} ${
    errors.name === undefined ? "" : classes.invalid
  }`;
  const streetDivClass = `${classes.control} ${
    errors.street === undefined ? "" : classes.invalid
  }`;
  const postalDivClass = `${classes.control} ${
    errors.postal === undefined ? "" : classes.invalid
  }`;
  const cityDivClass = `${classes.control} ${
    errors.city === undefined ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameDivClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={values.name}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className={streetDivClass}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          onChange={handleInputChange}
          value={values.street}
        />
        {errors.street && <p>{errors.street}</p>}
      </div>
      <div className={postalDivClass}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="number"
          name="postal"
          onChange={handleInputChange}
          value={values.postal}
        />
        {errors.postal && <p>{errors.postal}</p>}
      </div>
      <div className={cityDivClass}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          onChange={handleInputChange}
          value={values.city}
        />
        {errors.city && <p>{errors.city}</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

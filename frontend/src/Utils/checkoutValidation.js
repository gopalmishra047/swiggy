const checkoutValidation = inputValues => {
  let errors = {};

  if (!inputValues.name) {
    errors.name = "Name is required !";
  }
  if (!inputValues.street) {
    errors.street = "Street is required !";
  }
  if (!inputValues.postal) {
    errors.postal = "Postal is required !";
  } else if (inputValues.postal.length < 6 || inputValues.postal.length > 6) {
    errors.postal = "Postal code must be 5 digits long !";
  }
  if (!inputValues.city) {
    errors.city = "City is required !";
  }
  return errors;
};

export default checkoutValidation;

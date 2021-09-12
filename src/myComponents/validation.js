const validation = (values) => {
  let errors = {};

  if (!values.fullname) {
    errors.fullname = "Name is required.";
  }
  if (!values.birthdate) {
    errors.birthdate = "Birthdate is required.";
  }
  if (!values.gender) {
    errors.gender = "Gender is required.";
  }
  if (!values.address) {
    errors.address = "Address is required.";
  }
  if (!values.email) {
    errors.email = "Email is required.";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required.";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone number should be 10 digits.";
  }

  return errors;
};

export default validation;

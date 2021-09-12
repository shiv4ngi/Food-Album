import { useEffect, useState } from "react";
import "./SignupForm.css";
import validation from "./validation";

const SignupForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullname: "",
    birthdate: "",
    gender: "",
    address: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors, dataIsCorrect, submitForm]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="title">
          <h2>Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">Full name</label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          <div className="birthdate">
            <label className="label">Birthdate</label>
            <input
              className="input"
              type="text"
              name="birthdate"
              value={values.birthdate}
              onChange={handleChange}
            />
            {errors.birthdate && <p className="error">{errors.birthdate}</p>}
          </div>
          <div className="gender">
            <label className="label">Gender</label>
            <input
              className="input"
              type="text"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            />
            {errors.gender && <p className="error">{errors.gender}</p>}
          </div>
          <div className="address">
            <label className="label">Address</label>
            <input
              className="input"
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="phone">
            <label className="label">Phone no.</label>
            <input
              className="input"
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupForm;

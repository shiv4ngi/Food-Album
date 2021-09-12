import { useState } from "react";
import SignupForm from "./SignupForm";
import SignupSuccess from "./SignupSuccess";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        <SignupSuccess />
      )}
    </div>
  );
};

export default Form;

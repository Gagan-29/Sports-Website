import "./register.css";
import FormInput from "./FormInput.js";
import { useState } from "react";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errormessage:
        "username must be 3-16 characters no special symbols allowed",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errormessage: "email must contain @ symbol",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errormessage: "",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errormessage:
        "password must contain atleast 1 number,1 letter,1 specialcharacter and it should be 8-20 characters",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{8,20}$`,
      label: "Password",
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errormessage: "password doesnt match",
      pattern: values.password,
      label: "Confirm Password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration succesfully Completed`);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="my-form">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;

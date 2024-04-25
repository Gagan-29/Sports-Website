import "./register.css";
import FormInput from "./FormInput.js";
import { useState } from "react";
function Feedback() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    Subject: "",
    Message: "",
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
      name: "subject",
      type: "text",
      placeholder: "Subject",
      errormessage: "",
      label: "Subject",
    },
    {
      id: 4,
      name: "message",
      type: "text",
      placeholder: "Message",
      errormessage: "Message field is compulsory",
      label: "Message",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback sent succesfully`);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <>
      <div className="my-form">
        <form onSubmit={handleSubmit}>
          <h1>Feedback</h1>
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
    </>
  );
}
export default Feedback;

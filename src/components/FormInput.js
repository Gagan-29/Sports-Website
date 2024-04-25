import { useState } from "react";
import "./FormInput.css";
function FormInput(props) {
  const { label, errormessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="item">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        required
        onFocus={() =>
          inputProps.name === "confirmpassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errormessage}</span>
    </div>
  );
}
export default FormInput;

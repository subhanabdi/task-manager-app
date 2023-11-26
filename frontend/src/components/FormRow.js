import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import useHomeContext from "../App";

import Wrapper from "../assets/wrappers/formRowWrapper";
const FormRow = ({
  label,
  name,
  type,
  EyeIcon,
  togglePassword,
  onChange,
  value,
}) => {
  const toggleVisiblePass = () => {
    togglePassword();
  };
  return (
    <Wrapper>
      <div className="input-container">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          className="main-input input input-field"
          onChange={onChange}
          value={value}
          required
        />
        {EyeIcon && (
          <EyeIcon className="eye-icon" onClick={toggleVisiblePass} />
        )}
      </div>
    </Wrapper>
  );
};
export default FormRow;

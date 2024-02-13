import React from "react";
import propTypes from "prop-types";

const FormInput = ({
  name,
  label,
  type = "text",
  placeholder,
  register,
  errors,
}) => {
  console.log(errors);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        label={label}
        placeholder={placeholder}
        className="px-5 py-2 rounded outline-none w-full mt-1 mb-2 text-black"
        {...register}
      />
      {errors && <small className="text-red-500">{errors.message}</small>}
    </div>
  );
};

FormInput.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  register: propTypes.object,
  errors: propTypes.object,
};

export default FormInput;

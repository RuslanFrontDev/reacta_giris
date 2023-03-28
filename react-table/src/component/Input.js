import React from "react";

const Input = ({ name, placeholder, value, onChange, type, className }) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;

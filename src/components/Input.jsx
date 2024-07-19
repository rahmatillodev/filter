import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="label">
      <input onChange={handleChange} value={value} type="radio" name={name} />
      <span
        className="mark"
        style={{ WebkitTextStroke: color ? "1px rgba(0,0,0,0.2)" : "", color: color }}
      >
        {title}
      </span>
    </label>
  );
};

export default Input;

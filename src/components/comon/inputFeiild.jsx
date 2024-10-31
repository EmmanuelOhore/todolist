import React from "react";
const InputFields = (props) => {
  const { value, type, name, onchange, label, errors, required } = props;

  return (
    <div className="mb-3">
      <label htmlforfor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        required={required}
        onChange={onchange}
        type={type}
        name={name}
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
      />
      {errors && <div className="alert alert-danger"> {errors} </div>}
    </div>
  );
};

export default InputFields;

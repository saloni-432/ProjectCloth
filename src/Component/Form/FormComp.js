import React from "react";

function FormComp({ handleChange, label, ...otherprops }) {
  return (
    <div className="group">
      <input className="input-prop" onChange={handleChange} {...otherprops} />
      {label && (
        <label
          htmlFor={otherprops.id}
          className={`${otherprops.value.length && "shrink"} input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormComp;

import React from "react";

export function Input({label, nameLabel, value, onChange}) {
  return (
    <>
      <div>
        <label htmlFor={nameLabel}>{label}</label>
        <input type="number" min="0" name={nameLabel} value={value} onChange={onChange}/>
      </div>
    </>
  );
}

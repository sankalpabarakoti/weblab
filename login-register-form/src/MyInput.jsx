import React from "react";

function MyInput({ fieldLabel, fieldType, fieldValue, onFieldChange, placeholderText }) {
  return (
    <div style={{ marginBottom: "1.2rem" }}>
      <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: "bold" }}>
        {fieldLabel}
      </label>
      <input
        type={fieldType}
        value={fieldValue}
        onChange={onFieldChange}
        placeholder={placeholderText}
        style={{
          padding: "0.6rem",
          width: "100%",
          borderRadius: "6px",
          border: "1.5px solid #888",
        }}
      />
    </div>
  );
}

export default MyInput;
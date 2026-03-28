import React, { useState } from "react";
import MyInput from "./MyInput";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const submitRegister = (e) => {
    e.preventDefault();
    console.log("Register Data:", { fullName, userEmail, userPassword });
    alert(`Account created for: ${fullName}`);
  };

  return (
    <div style={{ width: "320px", margin: "2rem auto", padding: "1.5rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Register</h3>
      <form onSubmit={submitRegister}>
        <MyInput
          fieldLabel="Full Name"
          fieldType="text"
          fieldValue={fullName}
          onFieldChange={(e) => setFullName(e.target.value)}
     
        />
        <MyInput
          fieldLabel="Email Address"
          fieldType="email"
          fieldValue={userEmail}
          onFieldChange={(e) => setUserEmail(e.target.value)}
          
        />
        <MyInput
          fieldLabel="Password"
          fieldType="password"
          fieldValue={userPassword}
          onFieldChange={(e) => setUserPassword(e.target.value)}
       
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.6rem",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#FF7043",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
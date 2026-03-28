import React, { useState } from "react";
import MyInput from "./MyInput";

function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { userEmail, userPassword });
    alert(`Logging in as: ${userEmail}`);
  };

  return (
    <div style={{ width: "320px", margin: "2rem auto", padding: "1.5rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Sign In</h3>
      <form onSubmit={submitLogin}>
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
          placeholderText="Enter password"
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.6rem",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#5C6BC0",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
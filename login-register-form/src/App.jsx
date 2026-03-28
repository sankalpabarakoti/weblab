import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div style={{ fontFamily: "Verdana, sans-serif" }}>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <button
          onClick={() => setShowLogin(true)}
          style={{
            marginRight: "0.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            border: "1px solid #888",
            backgroundColor: showLogin ? "#5C6BC0" : "#fff",
            color: showLogin ? "#fff" : "#000",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <button
          onClick={() => setShowLogin(false)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            border: "1px solid #888",
            backgroundColor: showLogin ? "#fff" : "#FF7043",
            color: showLogin ? "#000" : "#fff",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>

      {showLogin ? <SignIn /> : <SignUp />}
    </div>
  );
}

export default App;
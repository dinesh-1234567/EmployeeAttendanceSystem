import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "75vh"
    }}>

      <div style={{
        width: 400,
        background: "white",
        borderRadius: 20,
        padding: "35px 38px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
      }}>

        <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 700, color: "#2563eb", marginBottom: 8 }}>
          Welcome Back
        </h2>
        <p style={{ textAlign: "center", fontSize: 15, marginBottom: 25, color: "#6b7280" }}>
          Login to Continue
        </p>

        <input
          className="input"
          style={{ marginBottom: 12 }}
          placeholder="Enter Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        /> <br></br>
       
        <input
          className="input"
          placeholder="Enter Password"
          type="password"
          style={{ marginBottom: 18 }}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: 16,
            borderRadius: 10
          }}
          onClick={handleLogin}
        >
          Login
        </button>

        <p style={{ marginTop: 15, textAlign: "center", fontSize: 14 }}>
          Don't have an account?{" "}
          <span
            style={{ color: "#2563eb", cursor: "pointer", fontWeight: 600 }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;

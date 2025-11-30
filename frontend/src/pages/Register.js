import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", empId: "", department: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password || !form.empId || !form.department) {
      alert("Please fill all fields");
      return;
    }
    alert("Registration Saved (backend add later)");
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "75vh"
    }}>
      <div style={{
        width: 450,
        background: "white",
        borderRadius: 20,
        padding: "35px 38px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
      }}>

        <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 700, color: "#10b981", marginBottom: 8 }}>
          Create Account
        </h2>
        <p style={{ textAlign: "center", fontSize: 15, marginBottom: 25, color: "#6b7280" }}>
          Register as Employee
        </p>

        <input className="input" style={{ marginBottom: 12 }} placeholder="Full Name" name="name" onChange={handleChange} /><br></br>
        <input className="input" style={{ marginBottom: 12 }} placeholder="Employee ID" name="empId" onChange={handleChange} /><br></br>
        <input className="input" style={{ marginBottom: 12 }} placeholder="Department" name="department" onChange={handleChange} /><br></br>
        <input className="input" style={{ marginBottom: 12 }} placeholder="Email" type="email" name="email" onChange={handleChange} /><br></br>
        <input className="input" style={{ marginBottom: 18 }} placeholder="Password" type="password" name="password" onChange={handleChange} />

        <button
          className="btn btn-secondary"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: 16,
            borderRadius: 10
          }}
          onClick={handleRegister}
        >
          Register
        </button>

        <p style={{ marginTop: 15, textAlign: "center", fontSize: 14 }}>
          Already have an account?{" "}
          <span
            style={{ color: "#10b981", cursor: "pointer", fontWeight: 600 }}
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;

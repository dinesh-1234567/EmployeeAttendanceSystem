import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Not Checked In");

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 60px",
        background: "linear-gradient(135deg, #4f46e5, #ec4899)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px 40px",
          borderRadius: 20,
          maxWidth: 850,
          margin: "0 auto",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 15 }}>
          Dashboard
        </h1>

        <h2 style={{ fontSize: 22, marginBottom: 5 }}>Today's Status</h2>
        <p style={{ marginBottom: 20 }}>{status}</p>

        <button
          className="btn btn-primary"
          style={{ marginRight: 10 }}
          onClick={() => setStatus("Checked In")}
        >
          Check In
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setStatus("Checked Out")}
        >
          Check Out
        </button>

        <hr style={{ margin: "30px 0" }} />

        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          <div
            className="card card-blue"
            style={{ padding: 20, cursor: "pointer" }}
            onClick={() => navigate("/history")}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700 }}>📅 My Attendance</h2>
            <p>Full attendance records</p>
          </div>

          <div
            className="card card-purple"
            style={{ padding: 20, cursor: "pointer" }}
            onClick={() => navigate("/summary")}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700 }}>📊 Monthly Summary</h2>
            <p>Statistics & overview</p>
          </div>
        </div>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/manager")}
        >
          👨‍💼 Go to Manager Dashboard
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";

function Summary() {
  const data = {
    present: 22,
    absent: 3,
    late: 2,
    halfday: 1,
    workingHours: 176
  };

  return (
    <div>
      <h2 className="app-title" style={{ fontSize: 22 }}>Monthly Attendance Summary</h2>
      <p className="app-subtitle">Overview of your performance this month</p>

      <div className="summary-grid">
        <div className="summary-card summary-present">
          <h3>Present</h3>
          <h1 style={{ marginTop: 8 }}>{data.present}</h1>
        </div>
        <div className="summary-card summary-absent">
          <h3>Absent</h3>
          <h1 style={{ marginTop: 8 }}>{data.absent}</h1>
        </div>
        <div className="summary-card summary-late">
          <h3>Late</h3>
          <h1 style={{ marginTop: 8 }}>{data.late}</h1>
        </div>
        <div className="summary-card summary-halfday">
          <h3>Half Day</h3>
          <h1 style={{ marginTop: 8 }}>{data.halfday}</h1>
        </div>
      </div>

      <h3 style={{ marginTop: 15 }}>
        Total Working Hours: <b>{data.workingHours} hrs</b>
      </h3>
    </div>
  );
}

export default Summary;

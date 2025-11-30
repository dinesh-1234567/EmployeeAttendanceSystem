import React from "react";
import { downloadCSV } from "../utils/csvExport";

function History() {
  const sampleData = [
    { date: "2025-11-29", checkIn: "09:10 AM", checkOut: "06:20 PM", hours: 9.2 },
    { date: "2025-11-28", checkIn: "09:00 AM", checkOut: "06:00 PM", hours: 9.0 },
    { date: "2025-11-27", checkIn: "09:15 AM", checkOut: "06:10 PM", hours: 8.9 }
  ];

  return (
    <div>
      <h2 className="app-title" style={{ fontSize: 22 }}>My Attendance History</h2>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item, i) => (
              <tr key={i}>
                <td>{item.date}</td>
                <td>{item.checkIn}</td>
                <td>{item.checkOut}</td>
                <td>{item.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-secondary"
        style={{ marginTop: 15 }}
        onClick={() => downloadCSV(sampleData, "my_attendance")}
      >
        Export CSV
      </button>
    </div>
  );
}

export default History;

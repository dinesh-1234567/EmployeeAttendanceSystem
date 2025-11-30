import React from "react";
import { downloadCSV } from "../utils/csvExport";

function ManagerDashboard() {
  const data = [
    { name: "Rahul", empId: "EMP001", department: "IT", date: "2025-11-29", checkIn: "09:10 AM", checkOut: "06:20 PM", hours: 9.2 },
    { name: "Sneha", empId: "EMP002", department: "HR", date: "2025-11-29", checkIn: "09:05 AM", checkOut: "06:15 PM", hours: 9.1 },
    { name: "Arjun", empId: "EMP003", department: "Finance", date: "2025-11-29", checkIn: "09:00 AM", checkOut: "06:18 PM", hours: 9.3 }
  ];

  return (
    <div>
      <h2 className="app-title" style={{ fontSize: 22 }}>Manager Dashboard</h2>
      <p className="app-subtitle">View team attendance overview</p>

      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Emp ID</th>
              <th>Dept</th>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.empId}</td>
                <td>{item.department}</td>
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
        onClick={() => downloadCSV(data, "attendance_report")}
      >
        Export as CSV
      </button>
    </div>
  );
}

export default ManagerDashboard;

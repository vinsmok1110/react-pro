import React from "react";

const Employees = () => {
  const employees = [
    { name: "Gian R.", position: "Manager", salary: 20000, status: "Active" },
    {
      name: "Ernest Q.",
      position: "Developer",
      salary: 15000,
      status: "Active",
    },
    {
      name: "Ryan L.",
      position: "Designer",
      salary: 50000,
      status: "Active",
    },
    {
      name: "Creshell A.",
      position: "Developer",
      salary: 10000,
      status: "Active",
    },
    { name: "Ana L.", position: "Manager", salary: 90000, status: "Active" },
    { name: "James Q.", position: "Designer", salary: 69000, status: "Active" },
    { name: "Ky L.", position: "Developer", salary: 45000, status: "Active" },
    {
      name: "Maria L.",
      position: "Designer",
      salary: 650000,
      status: "Active",
    },
    { name: "Mary A.", position: "Manager", salary: 0, status: "Not Active" },
    {
      name: "Heinrich R.",
      position: "Developer",
      salary: 0,
      status: "Not Active",
    },
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>No.</th>
          <th>Employee Names</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.status === "Active" ? employee.salary : "N/A"}</td>
            <td>{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Employees;

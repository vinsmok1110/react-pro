import React from "react";

const Employees = () => {
  const employees = [
    {
      name: "Gian R.",
      position: "Manager",
      salary: 99999,
      status: "Active",
    },
    {
      name: "Ernest Q.",
      position: "Developer",
      salary: 123456,
      status: "Active",
    },
    {
      name: "Ryan L.",
      position: "Designer",
      salary: 123123123,
      status: "Active",
    },
    {
      name: "Creshell A.",
      position: "Developer",
      salary: 12398172398,
      status: "Active",
    },
    {
      name: "Ana L.",
      position: "Manager",
      salary: 90,
      status: "Active",
    },
    {
      name: "James Q.",
      position: "Designer",
      salary: 69,
      status: "Active",
    },
    {
      name: "Ky L.",
      position: "Developer",
      salary: 73,
      status: "Active",
    },
    {
      name: "Maria L.",
      position: "Designer",
      salary: 60,
      status: "Active",
    },
    {
      name: "Mary A.",
      position: "Manager",
      salary: 0,
      status: "Not Active",
    },
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
          <Employee key={index} index={index + 1} employee={employee} />
        ))}
      </tbody>
    </table>
  );
};

const Employee = ({ index, employee }) => {
  const { name, position, salary, status } = employee;
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>{status === "Active" ? salary : "N/A"}</td>
      <td>{status}</td>
    </tr>
  );
};

export default Employees;

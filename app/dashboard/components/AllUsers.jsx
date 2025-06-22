"use client";
import React, { useEffect, useState } from "react";
import  axios  from 'axios';

const USER_QUERY = `
  query {
    users {
      id
      firstName
      email
      department
      role
    }
  }
`;

const AllUsers = () => {
      const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .post("/api/graphql", { query: USER_QUERY })
      .then((res) => {
        setUsers(res.data.data.users);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
      });
  }, []);
    return (
           <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      {users.map((user) => (
        <div key={user.id} className="border p-2 mb-2 rounded bg-white shadow">
          <p><strong>Name:</strong> {user.firstName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Department:</strong> {user.department}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ))}
    </div>
    );
};

export default AllUsers;





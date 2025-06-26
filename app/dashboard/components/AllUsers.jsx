"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import updateRole from "@/app/actions/auth/[id]/updateRole";
import { toast } from "react-toastify";
import FiredEmployee from "@/app/actions/auth/[id]/firedEmployee";

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

  // Fetch all users
  const fetchUsers = () => {
    axios
      .post("/api/graphql", { query: USER_QUERY })
      .then((res) => {
        setUsers(res.data.data.users);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle role update
  const handleMakeHR = async (userId) => {
    console.log(`Making user with ID ${userId} an HR`);
    updateRole(userId)
      .then((res) => {
        if (res.success) {
          toast.success("User role updated successfully");
          fetchUsers(); // Refresh the user list
        }
      })
      .catch((error) => {
        console.error("Error updating user role:", error);
        toast.error("Failed to update user role");
      });
  };
  const handleDelete = async (userId) => {
    console.log(`Deleting user with ID ${userId}`);
    FiredEmployee(userId).then((res) => {
      if (res.success) {
        toast.success("User deleted successfully");
        fetchUsers(); // Refresh the user list
      } else {
        toast.error("Failed to delete user");
      }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Users</h2>

      <table className="min-w-full border border-[#acc8a7]">
        <thead className="bg-[#f3f4f6]">
          <tr>
            <th className="px-4 py-2 border-[#acc8a7] border-b">#</th>
            <th className="px-4 py-2 border-[#acc8a7] border-b">First Name</th>
            <th className="px-4 py-2 border-[#acc8a7] border-b">Email</th>
            <th className="px-4 py-2 border-[#acc8a7] border-b">Department</th>
            <th className="px-4 py-2 border-[#acc8a7] border-b">Role</th>
            <th className="px-4 py-2 border-[#acc8a7] border-b">Make HR</th>
            <th className="px-4 py-2 border-[#acc8a7] border-b">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user, idx) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border-[#acc8a7] border-b">{idx + 1}</td>
              <td className="px-4 py-2 border-[#acc8a7] border-b">
                {user.firstName}
              </td>
              <td className="px-4 py-2 border-[#acc8a7] border-b">
                {user.email}
              </td>
              <td className="px-4 py-2 border-[#acc8a7] border-b">
                {user.department}
              </td>
              <td className="px-4 py-2 border-[#acc8a7] border-b">
                {user.role}
              </td>
              <td className="px-4 py-2 border-[#acc8a7] border-b">
                {user.role !== "HR" && user.role !== "admin" && (
                  <button
                    onClick={() => handleMakeHR(user.id)}
                    className=" button-secondary-color text-gray-50 text-lg  cursor-pointer font-medium px-3 py-1 rounded hover:bg-[#acc8a7] hover:text-gray-800"
                  >
                    Make HR
                  </button>
                )}
              </td>
              <td className="px-4 py-2 border-[#acc8a7] border-b ">
                {user.role !== "admin" && (
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-300 text-gray-50 text-lg font-medium px-5 py-1 rounded hover:bg-red-700 cursor-pointer"
                  >
                    Fired
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

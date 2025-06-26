"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon, SendIcon } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addProject from "@/app/actions/auth/AddProject";
import axios from "axios";
import { toast } from "react-toastify";

const USER_QUERY = `
  query {
    hrUsers {
      id
      firstName
      email
    }
  }
`;

const statusOptions = [
  "Pending",
  "In Progress",
  "Completed",
  "On Hold",
  "delayed",
  "Rejected",
];

const AddTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitDate, setSubmitDate] = useState(new Date());
  const [deadLineDate, setDeadLineDate] = useState(new Date());
  const [hrUsers, setHrUsers] = useState([]);
  useEffect(() => {
    axios
      .post("/api/graphql", { query: USER_QUERY })
      .then((res) => {
        setHrUsers(res.data.data.hrUsers);
      })
      .catch((err) => {
        console.error("Error fetching HRs:", err);
      });
  }, []);
  const onSubmit = (data) => {
    data.submitDate = submitDate.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    data.deadLineDate = deadLineDate.toISOString().split("T")[0];
    addProject(data).then((response) => {
      if (response.success) {
        toast.success("Project added successfully!");
      } else {
        toast.error("Failed to add project: ");
      }
    });
    // Send to server or API here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6 my-24"
    >
      <h2 className="text-2xl font-semibold text-center">Add New Project</h2>

      {/* Title */}
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          {...register("title", { required: true })}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter task or project title"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div className="lg:flex lg:justify-start w-full">
        {/* Submit Date */}
        <div className="lg:mr-4 mb-4 lg:mb-0 w-full">
          <label className="block font-medium mb-1">Submit Date</label>
          <div className="relative w-full bg-white">
            <DatePicker
              selected={submitDate}
              onChange={(date) => {
                setSubmitDate(date);
              }}
              className="w-full border border-gray-300 p-2 rounded-md cursor-pointer"
              dateFormat="yyyy-MM-dd"
            />
            <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        {/* Deadline */}
        <div className="lg:mr-4 mb-4 lg:mb-0 w-full">
          <label className="block font-medium mb-1">Deadline Date</label>
          <div className="relative w-full">
            <DatePicker
              selected={deadLineDate}
              onChange={(date) => {
                setDeadLineDate(date);
              }}
              className="w-full border border-gray-300 p-2 rounded-md cursor-pointer"
              dateFormat="yyyy-MM-dd"
            />
            <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="block font-medium mb-1">Status</label>
        <select
          {...register("status", { required: true })}
          className="w-full border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select status</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Department */}
      <div>
        <label className="block font-medium mb-1">Department</label>
        <select
          {...register("department", { required: true })}
          className="w-full border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select department</option>

          <option value="HR Department">HR Department</option>
        </select>
      </div>
      {/* HR Email */}
      <div>
        <label className="block font-medium mb-1">HR Email</label>
        <select
          {...register("hrEmail", { required: true })}
          className="w-full border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select HR Email</option>
          {hrUsers.map((user) => (
            <option key={user.id} value={user.email}>
              {user.email}
            </option>
          ))}
        </select>
      </div>

      {/* HR Name */}
      <div>
        <label className="block font-medium mb-1">HR Name</label>
        <select
          {...register("hrName", { required: true })}
          className="w-full border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select HR Name</option>
          {hrUsers.map((user) => (
            <option key={user.id} value={user.firstName}>
              {user?.firstName}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#acc8a7] hover:bg-[#9bb898] text-white px-6 py-2 rounded-lg inline-flex items-center gap-2"
        >
          <SendIcon size={18} /> Submit
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;

"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon, SendIcon } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const departments = [
  "Financial Department",
  "Deal Department",
  "Design Department",
  "Analysis Department",
  "Product (Development) Department",
  "Testing Department",
  "Billing Department",
];

const statusOptions = [
  "Pending",
  "In Progress",
  "Completed",
  "On Hold",
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

  const onSubmit = (data) => {
    data.submitDate = submitDate;
    data.deadLineDate = deadLineDate;
    console.log("Submitted Data:", data);
    // Send to server or API here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center">
        Add New Task / Project
      </h2>

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
      {/* Submit Date */}
      <div>
        <label className="block font-medium mb-1">Submit Date</label>
        <div className="relative">
          <DatePicker
            selected={submitDate}
            onChange={(date) => setSubmitDate(date)}
            className="w-full border border-gray-300 p-2 rounded-md cursor-pointer"
            dateFormat="yyyy-MM-dd"
          />
          <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
      {/* Deadline */}
      <div>
        <label className="block font-medium mb-1">Deadline Date</label>
        <div className="relative">
          <DatePicker
            selected={deadLineDate}
            onChange={(date) => setDeadLineDate(date)}
            className="w-full border border-gray-300 p-2 rounded-md cursor-pointer"
            dateFormat="yyyy-MM-dd"
          />
          <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
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
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* HR Name */}
      <div>
        <label className="block font-medium mb-1">HR Name</label>
        <input
          {...register("hrName", { required: true })}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Enter HR's name"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          {...register("description")}
          className="w-full border border-gray-300 p-2 rounded-md min-h-[100px]"
          placeholder="Enter task or project description"
        />
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

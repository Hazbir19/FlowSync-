"use client";
import { RegisterUser } from "@/app/actions/auth/RegisterUser";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Register_page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // Add default values
    const finalData = {
      ...data,
      role: "employee", // Default role
    };
     const response =   await RegisterUser(finalData)
         if (response.success) {
      toast.success(response.message);
      reset();
    } else {
      toast.error(response.message);
    }
  };


  return (
    <>
      <div className="layout-background-color  rounded-lg p-6">
        <h1 className="text-5xl my-24 text-[#acc8a7] font-bold mb-4 text-center">
          Register
        </h1>
        <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
          <Image
            src="/Sign up-bro.png"
            width={300}
            height={300}
            alt="Register Image"
            className="lg:w-full w-1/2"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* User Name  */}
              <div className="inline">
                <label className="input layout-background-color">
                  <svg
                    className="h-[2em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="text"
                    placeholder="Username"
                    {...register("firstName", { required: true })}
                    className="text-color "
                  />
                </label>
              </div>
              {/* User Email */}
              <label className="input layout-background-color">
                <svg
                  className="h-[2em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="Usermail@site.com"
                  {...register("email", { required: true })}
                  className="w-full"
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
              {/* User Password */}
              <label className="input layout-background-color">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                      message:
                        "Password must include uppercase, lowercase, and number",
                    },
                  })}
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
              {/* Select Department */}
              <div>
                <select
                  {...register("department", {
                    required: "Department is required",
                  })}
                  className="px-3 py-2 rounded layout-background-color w-5/6 lg:w-full"
                >
                  <option value="">-- Select Department --</option>
                  <option value="HR Department">HR Department</option>
                  <option value="Deal Department">Deal Department</option>
                  <option value="Design Department">Design Department</option>
                  <option value="Product Department">
                    Product Development Department
                  </option>
                  <option value="Testing Department">Testing Department</option>
                  <option value="Billing Department">
                    Billing and Packaging Department
                  </option>
                </select>
                {errors.department && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.department.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-4 w-full my-6">
              <button
                type="submit"
                className=" text-white  text-xl font-light shadow-[#acc8a7] shadow-xl  button button-secondary-color px-5 py-2 rounded-2xl"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

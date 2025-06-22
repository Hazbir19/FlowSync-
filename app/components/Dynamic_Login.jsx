"use client";

import { useState } from "react";
import LoginPage from "../login/page";
import RegisterPage from "../register/page";


export default function Dynamic_Login() {
    const [activeTab, setActiveTab] = useState("login");
  return (
   <>
   <div>
        <div className="flex justify-center items-center my-8">
        <button
            className={`px-4 py-2 ${activeTab === "login" ? "bg-[#acc8a7] text-white" : "bg-gray-200 text-gray-700"} rounded-l`}
            onClick={() => setActiveTab("login")}
        >
            Login
        </button>
        <button
            className={`px-4 py-2 ${activeTab === "register" ? "bg-[#acc8a7] text-white" : "bg-gray-200 text-gray-700"} rounded-r`}
            onClick={() => setActiveTab("register")}
        >
            Register
        </button>
        </div>
        {activeTab === "login" && <LoginPage />}
        {activeTab === "register" && <RegisterPage />}
   </div>
   </>
  )
}

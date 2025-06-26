import {
  FilePlus,
  LayoutDashboard,
  List,
  Paperclip,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function AdminLink() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 mt-8">
        <div className="flex items-center justify-center space-x-2 text-white ">
          <div>
            <LayoutDashboard size={40} strokeWidth={1} />
          </div>
          <Link href="/dashboard" className="text-xl font-medium text-white">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2 text-white ">
          <div>
            <FilePlus size={35} strokeWidth={1} />
          </div>
          <Link
            href="/dashboard/projectAdd"
            className="text-xl font-medium text-white"
          >
            Project Add
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2 text-white">
          <div className="text-2xl font-bold">
            <List size={35} strokeWidth={1} />
          </div>
          <Link
            href="/dashboard/projectList"
            className="text-xl font-medium text-white"
          >
            Project List
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2 text-white">
          <div className="text-2xl font-bold">
            <Users size={35} strokeWidth={1} />
          </div>
          <Link
            href="/dashboard/userList"
            className="text-xl font-medium text-white"
          >
            UserList
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2 text-white">
          <div className="text-2xl font-bold">
            <Paperclip size={35} strokeWidth={1} />
          </div>
          <Link
            href="/dashboard/Task"
            className="text-xl font-medium text-white"
          >
            AI Assistant
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminLink;

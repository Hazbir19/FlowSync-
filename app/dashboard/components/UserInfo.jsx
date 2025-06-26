"use client";

import { useSession } from 'next-auth/react';
import React from 'react'

function UserInfo() {

    const {data: session, status} =  useSession();
status === "loading" && <div>Loading...</div>;
const { firstName, email, department } = session?.user || {};

return (
  <>
    <div>{status} </div>
    <div>{firstName}</div>
    <div>{email}</div>
    <div>{department}</div>
  </>
);
}

export default UserInfo
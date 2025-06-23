"use server";
import dbConnect, { collectionNames } from "@/app/lib/DataBaseConect";
import bcrypt from "bcrypt";

export const RegisterUser = async (payload) => {
  // console.log("RegisterUser called with payload:", payload);
  const employeeCollection = dbConnect(collectionNames.userCollection);
  const employee = await employeeCollection.findOne({ email: payload.email });
  if (!employee) {
    const hashpassword = await bcrypt.hash(payload.password, 10);
    payload.password = hashpassword;
    const result = await employeeCollection.insertOne(payload);
    console.log("Insert result:", result);
    return { success: true, message: "User registered successfully" };
  } else {
    return { success: false, message: "User already exists with this email" };
  }
};

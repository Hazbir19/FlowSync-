"use server";
import dbConnect, { collectionNames } from "@/app/lib/DataBaseConect";
import bcrypt from "bcrypt";
export const LoginAuth = async (payload) => {
  const employeeCollection = dbConnect(collectionNames.userCollection);
  const user = await employeeCollection.findOne({ email: payload?.email });
  if (user) {
    const isPasswordValid = await bcrypt.compare(
      payload.password,
      user.password
    );
    if (isPasswordValid) {
      return user;
    } else {
      return { success: false, message: "Invalid password" };
    }
  } else return null;
};

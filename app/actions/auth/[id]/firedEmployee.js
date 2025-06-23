"use server";

import dbConnect, { collectionNames } from "@/app/lib/DataBaseConect";
import { ObjectId } from "mongodb";

export default async function FiredEmployee(param) {
  const id = param;
  console.log("User ID:", id);
  const collection = dbConnect(collectionNames.userCollection);
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  console.log("Delete Result:", result);
  if (result.deletedCount > 0) {
    return { success: true, message: "User deleted successfully" };
  } else {
    return { success: false, message: "Failed to delete user" };
  }
}

"use server";

import dbConnect, { collectionNames } from "@/app/lib/DataBaseConect";
import { ObjectId } from "mongodb";

export default async function updateRole( param ) {
  const  id  = param;
  console.log("User ID:", id);
  const collection = dbConnect(collectionNames.userCollection);
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { role:"HR"} },)
      console.log("Update Result:", result);
  if (result.modifiedCount > 0) {
    return { success: true, message: "User role updated successfully" };
  }
}
"use server";

import dbConnect, { collectionNames } from "@/app/lib/DataBaseConect";

export default async function addProject(data) {
      const projectCollection = dbConnect(collectionNames.projectCollection); 
        const result = await projectCollection.insertOne(data);
        if (result.acknowledged) {
            return { success: true, message: "Project added successfully" };
        } else {
            return { success: false, message: "Failed to add project" };
        }
}
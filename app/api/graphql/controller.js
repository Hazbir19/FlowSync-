import dbConnect, { collectionNames } from "../../lib/DataBaseConect";


const userCollection = collectionNames.userCollection;

export async function getUsers() {
  const collection = dbConnect(userCollection);
  const users = await collection.find().toArray();

  return users.map((user) => ({
    id: user._id.toString(),
    firstName: user.firstName,
    email: user.email,
    department: user.department,
    role: user.role,
  }));
}
export async function getHRUsers() {
  const collection = dbConnect(collectionNames.userCollection);
  const users = await collection.find({ role: "HR" }).toArray();

  return users.map((user) => ({
    id: user._id.toString(),
    firstName: user.firstName,
    email: user.email,
  }));
}
export async function getAllProject() {
  const collection = dbConnect(collectionNames.projectCollection);
  const projects = await collection.find().toArray();

  return projects.map((project) => ({
    id: project._id.toString(),
    title: project?.title,
    status: project.status,
    department: project.department,
    hrEmail: project.hrEmail,
    hrName: project.hrName,
  }));
} 
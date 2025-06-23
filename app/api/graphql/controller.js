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
// NEW: Update role function
export async function updateUserRole(id, role) {
  const collection = dbConnect(userCollection);
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { role } },
    { returnDocument: "after" }
  );

  const user = result.value;
  if (!user) return null;

  return {
    id: user._id.toString(),
    firstName: user.firstName,
    email: user.email,
    department: user.department,
    role: user.role,
  };
}

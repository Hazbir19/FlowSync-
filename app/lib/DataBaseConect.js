import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = `mongodb+srv://${process.env.DB_Store}:${process.env.DB_Pass}@cluster0.ymamf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// 
export const collectionNames = {
  userCollection:'Employee',
} 
export default function dbConnect (collectionName) {
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
    return client.db(process.env.DB_NAME).collection(collectionName)
}

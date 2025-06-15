import dbConnect from "@/app/lib/DataBaseConect";

export async function GET() {
  const user = await dbConnect("userCollection").find({}).toArray();

  return Response.json(user);
}
export async function POST(req) {

  const body = await req.json();
  const user = await dbConnect("userCollection").insertOne(body);
  return Response.json(body);
}

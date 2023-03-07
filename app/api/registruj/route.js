import { connectDB, disconnectDB, client } from "@/DB/main";

export default async function GET(req, res) {
  try {
    const data = req.body;
    await connectDB();

    const d = client.db();

    const usersCollection = db.collection("users");

    const result = await usersCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "User inserted" });
    disconnectDB();
  } catch (error) {
    console.log(error);
  }
}

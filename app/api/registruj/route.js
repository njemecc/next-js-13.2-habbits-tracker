import { connectDB, disconnectDB, client } from "@/DB/main";
import { NextResponse } from "next/server";

export default async function POST(req, res) {
  const data = req.data;
  try {
    await connectDB();

    const db = client.db();

    const usersCollection = db.collection("users");

    const result = await usersCollection.insertOne(data);
    res.status(201).json({ message: "User inserted" });
    disconnectDB();
  } catch (error) {
    console.log(error);
  }
}

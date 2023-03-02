import { MongoClient } from "mongodb";

export async function POST(req, res) {
  const data = req.body;

  const client = MongoClient.connect(
    "mongodb+srv://branislannjemec:Cokolada.123!@njemecc.lgqwlyu.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const usersCollection = db.collection("users");

  const result = await usersCollection.insertOne(data);

  return new Response("uspesno upisani podaci!");
}

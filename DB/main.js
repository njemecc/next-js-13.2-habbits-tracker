import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://branislannjemec:xB0mduZEneKKXePp@njemecc.lgqwlyu.mongodb.net/habbit_tracker?retryWrites=true&w=majority";
export const client = new MongoClient(uri);

export async function connectDB() {
  console.log("DB CONNECTED");
  await client.connect();
  return;
}
export async function disconnectDB() {
  console.log("DB DISCONNECTED");
  await client.close();
  return;
}

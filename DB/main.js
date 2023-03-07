import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://branislannjemec:TcOJNfhpWxpklyJi@njemecc.lgqwlyu.mongodb.net/habbit_tracker?retryWrites=true&w=majority";
export const client = new MongoClient(uri);

export async function connectDB() {
  await client.connect();
  return;
}
export async function disconnectDB() {
  await client.close();
  return;
}

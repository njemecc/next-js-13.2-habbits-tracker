import { MongoClient } from "mongodb";

//if (req.body === "POST") {
const data = req.body;

const client = await MongoClient.connect(
  "mongodb+srv://branislannjemec:TcOJNfhpWxpklyJi @njemecc.lgqwlyu.mongodb.net/habbit_tracker?retryWrites=true&w=majority"
);

const db = client.db();

const usersCollection = db.collection("users");

const result = await usersCollection.insertOne(data);

console.log(result);

client.close();

res.status(201).json({ message: "User inserted" });
//} else {
//console.log("error");
//}

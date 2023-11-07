import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method) {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://testAdmin123:testAdmin123@cluster0.hioqsee.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    await meetupsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
};

export default handler;

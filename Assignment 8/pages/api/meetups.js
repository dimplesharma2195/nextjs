import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  if (req.method === 'POST') {
    const data = req.body;
    const result = await meetupsCollection.insertOne(data);
    client.close();
    return res
      .status(201)
      .json({ message: 'Meetup inserted', meetupId: result.insertedId });
  }

  if (req.method === 'GET') {
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    const formatted = meetups.map(m => ({
      id: m._id.toString(),
      title: m.title,
      image: m.image,
      address: m.address,
      description: m.description,
    }));
    return res.status(200).json(formatted);
  }

  res.status(405).json({ message: 'Method not allowed' });
}

export default handler;
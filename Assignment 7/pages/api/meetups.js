import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  if (req.method === 'POST') {
    // POST request
    const data = req.body;
    const result = await meetupsCollection.insertOne(data);
    client.close();
    return res.status(201).json({ message: 'Meetup inserted!', meetupId: result.insertedId });
  }

  if (req.method === 'GET') {
    // GET request
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return res
      .status(200)
      .json({
        meetups: meetups.map(m => ({
          id: m._id.toString(),
          title: m.title,
          address: m.address,
          image: m.image,
          description: m.description
        }))
      });
  }

  res.status(405).json({ message: 'Method not allowed' });
}

export default handler;
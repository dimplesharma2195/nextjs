import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/router';

export default function MeetupDetailPage({ meetupData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading…</p>;
  }

  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <section>
        <img src={meetupData.image} alt={meetupData.title} style={{ width: '100%' }} />
        <h1>{meetupData.title}</h1>
        <address>{meetupData.address}</address>
        <p>{meetupData.description}</p>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetups = await db.collection('meetups').find({}, { projection: { _id: 1 } }).toArray();
  client.close();

  return {
    paths: meetups.map(m => ({ params: { meetupId: m._id.toString() } })),
    fallback: true
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetup = await db.collection('meetups').findOne({ _id: new ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      }
    }
  };
}
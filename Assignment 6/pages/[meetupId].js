import { useRouter } from 'next/router';
import { DUMMY_MEETUPS } from '../data/dummy-meetups';

function MeetupDetailPage({ meetupData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <img src={meetupData.image} alt={meetupData.title} style={{ width: '100%' }} />
      <h1>{meetupData.title}</h1>
      <address>{meetupData.address}</address>
      <p>{meetupData.description}</p>
    </section>
  );
}

export async function getStaticPaths() {
  const paths = DUMMY_MEETUPS.map(m => ({
    params: { meetupId: m.id }
  }));

  return {
    paths,
    fallback: true 
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const meetup = DUMMY_MEETUPS.find(m => m.id === meetupId);

  return {
    props: {
      meetupData: meetup
    },
    revalidate: 10
  };
}

export default MeetupDetailPage;
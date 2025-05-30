import { useRouter } from 'next/router';

function MeetupDetailPage({ meetup }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <img src={meetup.image} alt={meetup.title} style={{ width: '100%' }} />
      <h1>{meetup.title}</h1>
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </section>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/meetups`
  );
  const meetups = await response.json();
  const paths = meetups.map(m => ({ params: { meetupId: m.id } }));

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/meetups`
  );
  const meetups = await response.json();
  const meetup = meetups.find(m => m.id === meetupId);

  if (!meetup) {
    return { notFound: true };
  }

  return {
    props: { meetup },
    revalidate: 10
  };
}

export default MeetupDetailPage;
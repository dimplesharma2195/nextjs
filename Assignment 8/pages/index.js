import MeetupList from '../components/meetup/MeetupList';

function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/meetups`);
  const data = await response.json();

  return {
    props: {
      meetups: data
    },
    revalidate: 10
  };
}

export default HomePage;
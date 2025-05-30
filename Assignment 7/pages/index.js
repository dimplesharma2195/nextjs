import Head from 'next/head';
import MeetupList from '../components/meetup/MeetupList';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse amazing React meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/meetups');
  const data = await response.json();

  return {
    props: { meetups: data.meetups },
    revalidate: 10
  };
}
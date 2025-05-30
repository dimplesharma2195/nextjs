import MeetupList from '../components/meetup/MeetupList';
import { DUMMY_MEETUPS } from '../data/dummy-meetups';

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}

export default HomePage;
import { DUMMY_MEETUPS } from '../data/dummy-meetups';
import MeetupList from '../components/meetup/MeetupList';

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
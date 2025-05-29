import { useRouter } from 'next/router';
import { DUMMY_MEETUPS } from '../data/dummy-meetups';

function MeetupDetailPage() {
  const router = useRouter();
  const { meetupId } = router.query;

  const meetup = DUMMY_MEETUPS.find(m => m.id === meetupId);

  if (!meetup) {
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

export default MeetupDetailPage;
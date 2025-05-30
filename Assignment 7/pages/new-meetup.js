import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetup/NewMeetupForm';

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(meetupData) {
    await fetch('/api/meetups', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: { 'Content-Type': 'application/json' }
    });
    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
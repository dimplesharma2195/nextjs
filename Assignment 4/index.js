import Link from 'next/link';

function AboutUs() {
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];
  
  return (
    <div>
      <h1>Our Development Team</h1>
      <ul>
        {details.map(developer => (
          <li key={developer.id}>
            <Link href={`/aboutus/${developer.id}`}>
              {developer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs;

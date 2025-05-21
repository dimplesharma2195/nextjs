import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function DeveloperDetail() {
  const router = useRouter();
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];
  
  useEffect(() => {
    if(router.query.id) {
      const developerId = parseInt(router.query.id);
      const foundDeveloper = details.find(dev => dev.id === developerId);
      setDeveloper(foundDeveloper);
      setLoading(false);
    }
  }, [router.query.id]);
  
  if(loading && !router.query.id) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>Developer Details</h1>
      {developer ? (
        <div>
          <p>Name: {developer.name}</p>
          <p>Role: {developer.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
}

export default DeveloperDetail;

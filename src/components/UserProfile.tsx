// https://www.youtube.com/watch?v=QKS97J7_YsE&list=PLVSKBfwSePNU34NXQiZ7TWwsnM6jKr72X&index=24&ab_channel=%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%B8%D0%B9%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4

import { useEffect, useState } from 'react';

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUser(data.results[0]);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch user data');
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchUserData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h2>User Profile</h2>
      {user && (
        <div>
          <img src={user.picture.large} alt="User Avatar" />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>Email: {user.email}</p>
        </div>
      )}
    </>
  );
};

export default UserProfile;

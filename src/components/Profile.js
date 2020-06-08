import React from 'react';
import { useAuth0 } from '../react-auth0';

const Profile = () => {
  const { user, loading } = useAuth0();

  if (loading || !user) {
    return <div> Loading...</div>;
  }

  return (
    <>
      <img src={user.picture} alt="Profile Pictures" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default Profile;

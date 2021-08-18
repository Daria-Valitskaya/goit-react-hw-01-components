import Profile from './Profile';
import user from './user.json';

const ProfileList = () => {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

export default ProfileList;

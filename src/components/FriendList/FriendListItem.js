import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

const FriendListItem = ({ avatar = defaultImage, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avaisOnlinear: PropTypes.bool,
};

export default FriendListItem;

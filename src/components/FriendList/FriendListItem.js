import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar = defaultImage, name, isOnline }) => {
  return (
    <li className={isOnline ? styles.item_on : styles.item_off}>
      <span className={styles.stats}>{isOnline ? 'online' : 'offline'}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

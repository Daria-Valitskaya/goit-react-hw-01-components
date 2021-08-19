import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Statistis = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>Upload stats</h2> : null}

      <ul className={styles.stat_list}>
        {stats.map(stat => (
          <li className={styles.item} key={stat.id} style={{ backgroundColor: generateColor() }}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistis.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistis;

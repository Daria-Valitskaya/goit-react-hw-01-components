import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={styles.transaction_type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;

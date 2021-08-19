import PropTypes from 'prop-types';
import Transaction from './Transaction';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th className={styles.transaction_title}>Type</th>
          <th className={styles.transaction_title}>Amount</th>
          <th className={styles.transaction_title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;

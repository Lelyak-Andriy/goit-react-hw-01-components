import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './Transaction-item/TransactionItem';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={style.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(el => (<TransactionItem key={el.id} item={el} />
      ))
      }
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory
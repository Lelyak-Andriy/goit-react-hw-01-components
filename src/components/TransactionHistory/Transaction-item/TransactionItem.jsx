import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionItem.module.css';

const TransactionItem = ({ item }) => (
  <tr>
    <td>{item.type}</td>
    <td>{item.amount}</td>
    <td>{item.currency}</td>
  </tr>
);

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })
};



export default TransactionItem;

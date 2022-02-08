import React from 'react';
import styles from './Stats.module.css';
import PropTypes from 'prop-types';


const StatsItem = ({ arr }) => (
  <ul className={styles.stats}>
    {Object.keys(arr).map(el => (<li key={el}>
      <span className={styles.label}>{el} </span>
      <span className={styles.quantity}>{arr[el]}</span>
    </li>))}
  </ul>
)

export default StatsItem;

StatsItem.prototypes = {
  arr: PropTypes.object.isRequired,
  el: PropTypes.arrayOf(PropTypes.string).isRequired
}
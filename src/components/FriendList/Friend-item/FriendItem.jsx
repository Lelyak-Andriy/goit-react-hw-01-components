import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendItem.module.css'

const FriendItem = ({ friend }) => (
  <li className={style.item}>
    <span className={friend.isOnline ? style.statusOnline : style.statusOffline}>{friend.isOnline}</span>
    <img className={style.avatar} src={friend.avatar} alt="" width="48" />
    <p className={style.name}>{friend.name}</p>
  </li>
)

FriendItem.propTypes = {
  arr: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default FriendItem
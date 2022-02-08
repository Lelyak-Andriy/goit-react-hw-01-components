import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";
import FriendItem from "./Friend-item/FriendItem";

const FriendList = ({ friends }) => (
  <ul className={style.friendsList}>
    {friends.map((el) => (
      <FriendItem key={el.id} friend={el} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
  el: PropTypes.object,
};

export default FriendList;

import React from "react";
import style from "./Profile.module.css";
import StatsItem from "./StatsItem/Stats";
import PropTypes from "prop-types";

const Profile = ({ user }) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img src={user.avatar} alt="user avatar" className={style.avatar} />
      <p className={style.username}>{user.username}</p>
      <p className={style.tag}>@{user.tag}</p>
      <p className={style.location}>{user.location}</p>
    </div>
    <StatsItem arr={user.stats} />
  </div>
);

Profile.prototypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};

export default Profile;

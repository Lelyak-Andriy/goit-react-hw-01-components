import React from "react";
import PropTypes from "prop-types";
import style from "./StatisticItem.module.css";

const StatsticItem = ({ arr }) => {
  let rnd1 = Math.random() * 255;
  let rnd2 = Math.random() * 255;
  let rnd3 = Math.random() * 255;
  let bgc = `rgb(${rnd1} ${rnd2} ${rnd3})`;
  return (
    <li className={style.item} style={{ backgroundColor: bgc }}>
      <span className={style.label}>{arr.label} </span>
      <span className={style.percentage}>{arr.percentage}%</span>
    </li>
  );
};

StatsticItem.propTypes = {
  arr: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatsticItem;

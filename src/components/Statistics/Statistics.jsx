import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './Statistic-Item/StatisticItem';
import style from './Statistics.module.css'

const Statistics = ({ title, stats }) => (<section className={style.statistics}>
  {title && (<h2 className={style.title}>{title}</h2>)}
  <ul className={style['stat-list']}>
    {stats.map(el => {
      return <StatisticItem key={el.id} arr={el} />
    })}
  </ul>
</section>
)

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics
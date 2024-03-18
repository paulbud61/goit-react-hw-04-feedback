import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  let bgColor;
  if (positivePercentage >= 50) {
    const greenIntensity = (positivePercentage - 50) / 50;
    bgColor = `rgba(${255 * (1 - greenIntensity)}, 255, 0, 1)`;
  } else {
    const yellowIntensity = positivePercentage / 50;
    bgColor = `rgba(255, ${255 * yellowIntensity}, 0, 3)`;
  }

  return (
    <div className={styles.statistics} style={{ backgroundColor: bgColor }}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;

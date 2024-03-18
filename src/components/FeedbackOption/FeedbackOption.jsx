import React from 'react';
import propTypes from 'prop-types';
import styles from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.optionsContainer}>
    {options.map(option => (
      <button
        key={option}
        className={`${styles.optionButton} ${styles[option]}`}
        onClick={() => onLeaveFeedback(option)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
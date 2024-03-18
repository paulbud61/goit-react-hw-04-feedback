import React from 'react';
import propTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <p className={styles.notificationMessage}>{message}</p>
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
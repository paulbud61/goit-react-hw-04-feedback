import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css'

const Section = ({ title, titleClass, children }) => (
  <section className={styles.section}>
    <h2 className={`${styles.title} ${titleClass}`}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
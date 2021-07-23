import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </section>
);

Section.defaultProps = {
  title: '',
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

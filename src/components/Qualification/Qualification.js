import React from 'react';
import PropTypes from 'prop-types';
import styles from './Qualification.module.scss';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';

export const Qualification = ({ data, left = false, showLine = true }) => {
  return (
    <div className={styles.Qualification} style={left ? { justifyContent: 'end' } : { justifyContent: 'start' }}>
      <div className={styles.DataContainer}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{data.date}</p>
      </div>
      {left && (
        <div className={styles.CircleLineContainer}>
          {data.education ? (
            <SchoolIcon className={styles.spanCircle} />
          ) : (
            <WorkOutlineIcon className={styles.spanCircle} />
          )}
          {showLine && <span className={styles.spanLine}></span>}
        </div>
      )}
    </div>
  );
};

Qualification.propTypes = {};

Qualification.defaultProps = {};

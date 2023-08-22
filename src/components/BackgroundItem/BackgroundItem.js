import React from 'react';
import styles from './BackgroundItem.module.scss';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';

export const BackgroundItem = ({ data, left = false, showLine = true }) => {
  return (
    <div className={styles.BackgroundItem} style={left ? { justifyContent: 'end' } : { justifyContent: 'start' }}>
      <div className={styles.DataContainer}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{data.date}</p>
      </div>
      {left && (
        <div className={styles.CircleLineContainer}>
          {data.education === true ? (
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

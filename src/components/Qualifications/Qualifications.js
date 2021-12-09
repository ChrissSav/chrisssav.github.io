import React from 'react';
import PropTypes from 'prop-types';
import styles from './Qualifications.module.scss';
import { Qualification } from '../Qualification/Qualification';

const Qualifications = () => {
  const list = [
    {
      education: false,
      title: 'Software Engineer',
      description: 'Intersalonica',
      date: 'Nov 2021 - Present',
    },
    {
      education: false,
      title: 'Android Engineer',
      description: 'Arx.net',
      date: 'Jun 2020 - Sept 2020',
    },
    {
      education: true,
      title: 'Applied Informatics',
      description: 'University of Macedonia',
      date: '2016 - 2020',
    },
  ];

  const rows = [];

  list.map((n, key) => {
    key++;
    if (key % 2 !== 0) {
      rows.push(<Qualification data={n} key={key} left={true} showLine={key !== list.length} />);
      rows.push(<Qualification data={{}} key={key + list.length} />);
    } else {
      rows.push(<Qualification data={{}} key={key + list.length} left={true} showLine={key !== list.length} />);
      rows.push(<Qualification data={n} key={key} />);
    }
  });

  return (
    <div className={styles.Qualifications}>
      <div className={styles.QualificationsIntroducation}>
        <h1>Background</h1>
      </div>

      <div className={styles.Container}>
        <img src='./assets/evolution.svg' alt='evolution' />
        <div className={styles.QualificationsContainer}>{rows}</div>
      </div>
    </div>
  );
};

Qualifications.propTypes = {};

Qualifications.defaultProps = {};

export default Qualifications;

import React from 'react';
import styles from './Qualifications.module.scss';
import { Qualification } from '../Qualification/Qualification';

const Qualifications = () => {
  const list = [
    {
      education: false,
      title: 'Mobile Software Engineer',
      description: 'Desquared',
      date: 'Mar 2022 - Present',
    },
    {
      education: false,
      title: 'Software Engineer',
      description: 'Intersalonica',
      date: 'Nov 2021 - Feb 2022',
    },
    {
      education: false,
      title: 'Android Engineer',
      description: 'arx.net',
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
    if (key % 2 === 0) {
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
        <h1>Qualifications</h1>
      </div>

      <div className={styles.Container}>
        <img src='./assets/evolution.svg' alt='evolution' />
        <div className={styles.QualificationsContainer}>{rows}</div>
      </div>
    </div>
  );
};

export default Qualifications;

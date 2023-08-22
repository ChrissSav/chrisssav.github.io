import React from 'react';
import styles from './Background.module.scss';
import { BackgroundItem } from '../BackgroundItem/BackgroundItem';

const BackgroundItems = () => {
  const list = [
    {
      education: false,
      title: 'Android Mobile Software Engineer',
      description: 'Desquared',
      date: 'Mar 2022 - Present',
      url: 'https://www.thinkdesquared.com/',
    },
    {
      education: false,
      title: 'Software Engineer',
      description: 'Intersalonica',
      date: 'Nov 2021 - Feb 2022',
      url: 'https://intersalonica.gr/',
    },
    {
      education: false,
      title: 'Android Engineer',
      description: 'arx.net',
      date: 'Jun 2020 - Sept 2020',
      url: 'https://web.arx.net/',
    },
    {
      education: true,
      title: 'Applied Informatics',
      description: 'University of Macedonia',
      date: '2016 - 2020',
      url: 'https://www.uom.gr',
    },
  ];

  const rows = [];

  list.map((n, key) => {
    key++;
    if (key % 2 === 0) {
      rows.push(<BackgroundItem data={n} key={key} left={true} showLine={key !== list.length} />);
      rows.push(<BackgroundItem data={{}} key={key + list.length} />);
    } else {
      rows.push(<BackgroundItem data={{}} key={key + list.length} left={true} showLine={key !== list.length} />);
      rows.push(<BackgroundItem data={n} key={key} />);
    }
  });

  return (
    <div className={styles.Background}>
      <div className={styles.BackgroundIntroducation}>
        <h1>Background</h1>
      </div>

      <div className={styles.Container}>
        <img src='./assets/evolution.svg' alt='evolution' />
        <div className={styles.BackgroundContainer}>{rows}</div>
      </div>
    </div>
  );
};

export default BackgroundItems;

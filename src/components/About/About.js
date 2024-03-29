import React from 'react';
import styles from './About.module.scss';
import DownloadIcon from '@mui/icons-material/Download';

const About = () => (
  <div className={styles.About}>
    <div className={styles.AboutIntroducation}>
      <h1>About Me</h1>
    </div>
    <div className={styles.AboutContainer}>
      <img src='./assets/about_me.svg' />
      <div className={styles.TextContainer}>
        <p>
          I am a graduate of Applied Informatics at the University of Macedonia in Thessaloniki, Greece. My aspiration
          has always been to put my ideas into practice. After my first encounter with computer programming, I realised
          that it was going to be my biggest passion. <strong> "Fellow." </strong> was the frst complete project that
          two of my fellow students and I developed successfully. In my free time, I am usually occupied with developing
          Web, Android applications, REST APIs and keeping up with the latest Agile methodologies like Scrum.
        </p>

        <a
          className={styles.Button}
          href='https://drive.google.com/drive/folders/1iS3lECfUiuzumpvfGsrNoOwKBztghopU?usp=sharing'
          rel='noreferrer'
          target='_blank'
        >
          <span>CV</span> <DownloadIcon />
        </a>
      </div>
    </div>
  </div>
);

export default About;

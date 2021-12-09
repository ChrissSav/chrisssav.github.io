import React from 'react';
import PropTypes from 'prop-types';
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
          that it was going to be my biggest passion. "Fellow." was the frst complete project that two of my fellow
          students and I developed successfully. The app is available in Google Play. In my free time, I am usually
          occupied with developing Web, Android applications, REST APIs and keeping up with the latest Agile
          methodologies like Scrum.
        </p>
        <button>
          <span>Download CV</span> <DownloadIcon />
        </button>
      </div>
    </div>
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
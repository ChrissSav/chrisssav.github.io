import React from 'react';
import styles from './Footer.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.FooterContainer}>
      <div className={styles.ChrisContainer}>
        <h1>Chris Savlidis</h1> <p> Software Engineer</p>
      </div>
      <div>
        <h2>Sections</h2>
        <ul>
          <li>
            <a href='#section_about'>About Me</a>
          </li>
          <li>
            <a href='#section_background'>Background</a>{' '}
          </li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <div className={styles.ContactContainer}>
          <ul>
            <li>
              <a href='https://github.com/ChrissSav' rel='noreferrer' target='_blank'>
                <GitHubIcon className={styles.icon} /> @ChrissSav
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/ChrissSav' rel='noreferrer' target='_blank'>
                <LinkedInIcon className={styles.icon} /> @ChrissSav
              </a>
            </li>
            <li>
              <a href='mailto:chris.savlidis@gmail.com'>
                <AlternateEmailIcon className={styles.icon} /> chris.savlidis@gmail.com
              </a>
            </li>
            <li>
              <a href='tel:00306995462228'>
                <CallIcon className={styles.icon} /> (+30) 699 546 2228
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className={styles.CopyContainer}>
      <p>
        © 2023 Developed and Designed by
        <a href='https://github.com/ChrissSav' target='_blank'>
          {' '}
          ChrissSav
        </a>
      </p>
    </div>
  </div>
);

export default Footer;

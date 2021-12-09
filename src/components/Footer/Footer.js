import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.FooterContainer}>
      <div className={styles.ChrisContainer}>
        <h1>Chris</h1> <p> Software Engineer</p>
      </div>
      <div>
        <h3>Sections</h3>
        <ul>
          <li>
            <a href='#section_about'>About</a>
          </li>
          <li>
            <a href='#section_qualifications'>Background</a>{' '}
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
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
              <a href='mailto:chris.savlidis@gmail.com' rel='noreferrer' target='_blank'>
                <AlternateEmailIcon className={styles.icon} /> chris.savlidis@gmail.com
              </a>
            </li>
            <li>
              <a href='tel:00306995462228' rel='noreferrer' target='_blank'>
                <CallIcon className={styles.icon} /> (+30) 699 546 2228
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className={styles.CopyContainer}>
      <p>
        © 2021{' '}
        <a href='https://github.com/ChrissSav' target='_blank'>
          {' '}
          ChrissSav,{' '}
        </a>
        illustrations from{' '}
        <a href='https://www.freepik.com' target='_blank'>
          {' '}
          freepik.
        </a>
      </p>
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;

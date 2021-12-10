import React from 'react';
import styles from './Info.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';

const Info = () => {
  const elements = [..."Hi,\xa0I'm\xa0"];
  const chris = [...'Chris'];
  const items = [];

  elements.forEach((n, key) => {
    items.push(<span key={key}>{n}</span>);
  });

  chris.forEach((n, key) => {
    items.push(
      <span key={key + 10} className={styles.textBlue}>
        {n}
      </span>
    );
  });

  return (
    <div className={styles.Info}>
      <div className={styles.textContainer}>
        <div className={styles.textContainerAnim}>
          <h1>{items}</h1>
        </div>
        <p>
          Software Engineer <br />
          From Thessaloniki, Greece
        </p>
        <div className={styles.iconsContainer}>
          <a href='https://github.com/ChrissSav' rel='noreferrer' target='_blank'>
            <GitHubIcon className={styles.icon} />
          </a>
          <a href='https://www.linkedin.com/in/ChrissSav' rel='noreferrer' target='_blank'>
            <LinkedInIcon className={styles.icon} />
          </a>
          <a href='mailto:chris.savlidis@gmail.com'>
            <AlternateEmailIcon className={styles.icon} />
          </a>
          <a href='tel:00306995462228'>
            <CallIcon className={styles.icon} />
          </a>
        </div>
      </div>{' '}
      <div className={styles.ImageContainer}>
        <img src='./assets/asset_laptop.svg' />
      </div>
    </div>
  );
};

Info.propTypes = {};

Info.defaultProps = {};

export default Info;

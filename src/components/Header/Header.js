import React from 'react';
import styles from './Header.module.scss';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Header = ({ onToggle, dark }) => (
  <div className={styles.Header}>
    <a href='#'>
      <h1>Chris</h1>
    </a>
    <ul>
      <li>
        <a href='#section_about'>About</a>
      </li>
      <li>
        <a href='#section_qualifications'>Background</a>
      </li>
      <li>
        <div onClick={onToggle}>{dark ? <NightlightIcon /> : <WbSunnyIcon />}</div>
      </li>
    </ul>
  </div>
);

export default Header;

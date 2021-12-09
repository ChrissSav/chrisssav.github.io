import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import About from './components/About/About';
import Qualifications from './components/Qualifications/Qualifications';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import CallIcon from '@mui/icons-material/Call';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    const dark = localStorage.getItem('darkMode');
    setDarkTheme(dark === 'true');
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className={darkTheme ? 'dark-theme app-container' : 'app-container'}>
      <div className='headerContainer'>
        <Header
          dark={!darkTheme}
          onToggle={() => {
            localStorage.setItem('darkMode', !darkTheme + '');
            setDarkTheme(!darkTheme);
          }}
        />
      </div>

      <section id='section_info'>
        <Info />
      </section>
      <section id='section_about'>
        <About />
      </section>
      <section id='section_qualifications'>
        <Qualifications />
      </section>
      <section id='section_footer'>
        <Footer />
      </section>
      <ArrowCircleUpIcon
        onClick={scrollToTop}
        className='button_top'
        style={{ fontSize: '3rem', opacity: visible ? '1' : '0' }}
      />
    </div>
  );
}

export default App;

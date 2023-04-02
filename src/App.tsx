import { useState, useEffect } from 'react';

import DesktopHeader from './components/header/desktop-header.component';
import MobileHeader from './components/header/mobile-header.component';
import HomeHero from './components/home-hero/home-hero.component';
import HomeIntro from './components/home-intro/home-intro.component';
import CategoriesContainer from './components/categories-container/categories-container.component';
import NewArriwalsContainer from './components/new-arrivals-container/new-arrivals-container.component';
import css from './App.module.css';


const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) setIsMobile(true);
      else setIsMobile(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={css['app-container']}>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <HomeHero />
      <HomeIntro />
      <CategoriesContainer />
      <NewArriwalsContainer />
    </div>
  )
}

export default App;
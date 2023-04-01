import Header from './components/header/header.component';
import HomeHero from './components/home-hero/home-hero.component';
import HomeIntro from './components/home-intro/home-intro.component';
import CategoriesContainer from './components/categories-container/categories-container.component';
import NewArriwalsContainer from './components/new-arrivals-container/new-arrivals-container.component';
import css from './App.module.css';


const App = () => {
  return (
    <div className={css['app-container']}>
      <Header />
      <HomeHero />
      <HomeIntro />
      <CategoriesContainer />
      <NewArriwalsContainer />
    </div>
  )
}

export default App;
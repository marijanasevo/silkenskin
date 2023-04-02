import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import css from './App.module.css';


const App = () => {

  return (
    <div className={css['app-container']}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App;
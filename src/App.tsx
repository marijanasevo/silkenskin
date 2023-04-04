import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Login from './routes/authentication/login.component';
import SignUp from './routes/authentication/sign-up.component';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import css from './App.module.css';


const App = () => {

  return (
    <div className={css['app-container']}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App;
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { UserContext } from './contexts/user.context';

import Navigation from './routes/navigation/navigation.component';
import Login from './routes/authentication/login.component';
import SignUp from './routes/authentication/sign-up.component';
import AccoutCreated from './routes/account/account-created.component';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import css from './App.module.css';

const App = () => {

  const { currentUser } = useContext(UserContext);

  return (
    <div className={css['app-container']}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/account-created' element={<AccoutCreated />} />
          <Route 
            path='/login' 
            element={currentUser ? 
              <Navigate to="/account-created" replace /> : <Login />} 
          />
          <Route 
            path='/sign-up' 
            element={currentUser ?
              <Navigate to="/account-created" replace /> : <SignUp />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App;
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Settings from './components/settings/Settings';
import { checkUser } from './services';
import './App.scss';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [checked, setIsChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsChecked(true);
      setIsAuth(false);
      return
    }


    checkUser().then(res => {
      if (res.data.ok) {
        setIsChecked(true)
        setIsAuth(true)
      }

    }).catch(err => console.log(err))
  }, [])


  return (
    <div>
      <Header />

      {
        checked && isAuth ?
          <Routes>
            <Route path='/bot/build/' element={<Main />} />
            <Route path='/bot/build/main' element={<Main />} />
            <Route path='/bot/build/settings' element={<Settings />} />
            <Route path='*' element={<Main />} />
          </Routes>
          :
          <Routes>
            <Route path='*' element={<Auth />} />
            <Route path='*' element={<Auth />} />
            <Route path='/bot/build/auth' element={<Auth />} />
          </Routes>
      }

    </div>

  );
}

export default App;

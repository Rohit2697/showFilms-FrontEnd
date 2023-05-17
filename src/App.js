
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import films from './Movies/top-rated-indian-movies-01.json';
import LoadingScreen from './Loading/LoadingScreen';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import { useEffect, useState } from 'react';
import Home from './Home/Home';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
    else {
      navigate('/')
    }
  }, [isLoggedIn, navigate])
  for (let i = 0; i < films.length; i++) {
    films[i]['id'] = `_id_${i}`
  }
  return (
    <>


      <Routes>
        <Route path='/' element={films.length ? <Home films={films} /> : <LoadingScreen />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      {/* <SignUp /> */}
      {/* <Login/> */}
      {/* <Header films={films} /> */}
      {/* <FilmTable films={films} /> */}
      {/* <PaginateItems films={films}/> */}
      {/* {!films.length ? <LoadingScreen /> : <PaginateItems films={films} />} */}
      {/* <Footer films={films}/> */}
    </>

  )
}

export default App;

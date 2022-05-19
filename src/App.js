import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Require from './pages/Login/Require';
import Reset from './pages/Login/Reset';
import NotFound from './pages/shared/NotFound';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={
          <Require>
            <Home />
          </Require>
        }></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='reset-password' element={<Reset />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

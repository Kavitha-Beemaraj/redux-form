import { Route, Routes } from 'react-router-dom';
import './App.css';
import Success from './components/Success'
import Login from './components/Login'
import Contact from './components/Contact'


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/*' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;

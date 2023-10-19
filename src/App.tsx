import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomeScreen from './components/welcome-screen/welcomeScreen';
import Formulario from './components/formulario/formulatio';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomeScreen/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
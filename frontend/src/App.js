import React, { useState } from "react";
import './App.css';
import Login from './components/login/login.js';
import Home from './components/home/home.js';
import Estoque from './components/estoque/estoque'; 
import Config from './components/movimentacao/config'; 
import Cadastrar from './components/cadastrar/cadastrar'; 
import Alterar from './components/alterar/alterar'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/rota_login'; 

function App() {
  const [isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem('token') !== null);
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/components/home" element={<Home />} />
          <Route path="/components/estoque" element={<Estoque />} />
          <Route path="/components/movimentacao" element={<Config />} />
          <Route path="/components/cadastrar" element={<Cadastrar />} />
          <Route path="/components/alterar/:id" element={<Alterar />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
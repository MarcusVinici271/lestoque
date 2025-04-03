import React from "react";
import './App.css';
import Login from './pages/login.js';
import Home from './pages/home.js';
import Estoque from './pages/estoque'; // Importe Estoque
import Config from './pages/config'; // Importe Config
import Cadastrar from './pages/cadastrar'; // Importe Cadastrar
import Alterar from './pages/alterar'; // Importe Alterar
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/menu.js";
import Index from "./pages/index.js";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pages/home" element={<Home />} />
        <Route path="/pages/estoque" element={<Estoque />} />
        <Route path="/pages/config" element={<Config />} />
        <Route path="/pages/cadastrar" element={<Cadastrar />} />
        <Route path="/pages/alterar/:id" element={<Alterar />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
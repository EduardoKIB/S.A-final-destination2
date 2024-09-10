
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cadastro from './páginas/cadastro';
import Login from './páginas/login';
import Home from './páginas/home';
import Sobre from './páginas/sobre';
import Busca from './páginas/Busca'; 
import Header from './Header';
import Fotos from './páginas/fotos';
import Pagamento from './páginas/pagamento';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="busca" element={<Busca />} /> 
        <Route path="fotos" element={<Fotos />} /> 
        <Route path="pagamento" element={<Pagamento />} /> 
      </Routes>
    </div>
  );
}

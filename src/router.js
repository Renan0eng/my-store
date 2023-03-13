import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CadastroProduto from './pages/Cadastro/Produto';

// import { Container } from './styles';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/cadastro/produto" element={<CadastroProduto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
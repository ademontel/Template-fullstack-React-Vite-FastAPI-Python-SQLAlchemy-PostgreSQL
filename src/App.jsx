// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';

const App = () => {
  return (
    <>
      {/* Menú de navegación */}
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link style={{ marginRight: '1rem' }} to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Definición de las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;

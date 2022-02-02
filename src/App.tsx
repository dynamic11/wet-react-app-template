import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage } from './pages';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);

export default App;

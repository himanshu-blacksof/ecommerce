import React from 'react';
import './index.css';
import Home from './Screens/Homscreen.js';
import Product from './Screens/Productscreen.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <Link to="/">Website</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;

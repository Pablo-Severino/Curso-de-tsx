import { useState } from 'react';
import './style/style.css';

import { Link } from 'react-router-dom';

import NavBars from './components/NavBars/Navbars'
import AppRoutes from './Routes';

function App() {
  return (
    <>
      <NavBars />
      <div className="home">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;

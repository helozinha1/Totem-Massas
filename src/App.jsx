import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Totem from './pages/Totem'; 

export default function App() {
  return (
    <BrowserRouter>
      <Totem />
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />

        {/* other routes here */}
      </Routes>
    </BrowserRouter>
  );
}
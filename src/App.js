import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';

export default function App() {
  return (
    <Router>
      <div className="mobile-shell">
        <Routes>
          <Route path="/"         element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login"    element={<Login />} />
          <Route path="/account"  element={<Account />} />
          <Route path="*"         element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

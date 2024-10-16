import React from 'react';
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const PORT = process.env.PORT || 3000;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionsPage from './components/TransactionsPage';
import AdminHomePage from './components/AdminHomePage';
import UserHomePage from './components/UserHomePage';
import LoginPage from './components/LoginPage';
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the book routes for any routes that start with /books
app.use('/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/transactions" element={<TransactionsPage isAdmin={true} />} />
        <Route path="/admin-home" element={<AdminHomePage />} />
        <Route path="/user-home" element={<UserHomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

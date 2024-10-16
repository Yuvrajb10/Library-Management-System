import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookAvailable({ isAdmin }) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');

  // Fetch available books from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/books/available')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  // Handle book selection from dropdown
  const handleBookSelect = (e) => {
    setSelectedBook(e.target.value);
  };

  // Navigate to the appropriate home page
  const goHome = () => {
    if (isAdmin) {
      navigate('/admin-home');
    } else {
      navigate('/user-home');
    }
  };

  // Logout handler
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="book-availability-container">
      {/* Header with Chart, Transactions, and Home */}
      <div className="header">
        <span>Chart</span>
        <span>Transactions</span>
        <span onClick={goHome} style={{ cursor: 'pointer', color: 'blue' }}>
          Home
        </span>
      </div>

      {/* Book Availability section */}
      <div className="book-availability">
        <h3>Is book available?</h3>
        <label>Book Availability:</label>
        <select value={selectedBook} onChange={handleBookSelect}>
          <option value="" disabled>Select a book</option>
          {books.map((book) => (
            <option key={book.codeNo} value={book.codeNo}>
              {book.name} - {book.author}
            </option>
          ))}
        </select>
      </div>

      {/* Issue Book */}
      <div className="issue-book">
        <h3>Issue book?</h3>
        <label>Enter Book Name:</label>
        <select>
          <option value="" disabled>Select a book</option>
          {books.map((book) => (
            <option key={book.codeNo} value={book.codeNo}>
              {book.name}
            </option>
          ))}
        </select>
      </div>

      {/* Return Book */}
      <div className="return-book">
        <h3>Return book?</h3>
        <label>Enter Author:</label>
        <select>
          <option value="" disabled>Select an author</option>
          {books.map((book) => (
            <option key={book.codeNo} value={book.author}>
              {book.author}
            </option>
          ))}
        </select>
      </div>

      {/* Pay Fine */}
      <div className="pay-fine">
        <h3>Pay Fine?</h3>
        <button onClick={() => alert('Proceed to pay fine...')}>
          Pay Fine
        </button>
      </div>

      {/* Logout Button */}
      <div className="logout">
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default BookAvailable;

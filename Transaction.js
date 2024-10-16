import React from 'react';
import { useNavigate } from 'react-router-dom';

function TransactionsPage({ isAdmin }) {
  const navigate = useNavigate();

  // Navigate to the appropriate home page based on user type
  const goHome = () => {
    if (isAdmin) {
      navigate('/admin-home');
    } else {
      navigate('/user-home');
    }
  };

  // Logout handler
  const handleLogout = () => {
    // Perform any logout logic here like clearing session/token
    navigate('/login');
  };

  return (
    <div className="transactions-container">
      {/* Header with Chart, Transactions, and Home */}
      <div className="header">
        <span>Chart</span>
        <span>Transactions</span>
        <span onClick={goHome} style={{ cursor: 'pointer', color: 'blue' }}>
          Home
        </span>
      </div>

      {/* Transactions options */}
      <div className="transaction-options">
        <button onClick={() => alert('Checking book availability...')}>
          Is book available?
        </button>
        <button onClick={() => alert('Issuing book...')}>Issue book?</button>
        <button onClick={() => alert('Returning book...')}>Return book?</button>
        <button onClick={() => alert('Paying fine...')}>Pay Fine?</button>
      </div>

      {/* Logout Button */}
      <div className="logout">
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default TransactionsPage;

import React, { useState } from 'react';

function UserLogin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, password })
    });

    const data = await response.json();

    if (data.success) {
      // Redirect to user dashboard or handle successful login
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleCancel = () => {
    setUserId('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Library Management System</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;

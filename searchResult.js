import React from 'react';

function SearchResult({ isAdmin, searchResults, handleIssue, handleReturn, handlePayFine }) {
  // Function to navigate home based on user type
  const goHome = () => {
    if (isAdmin) {
      window.location.href = '/admin-home';
    } else {
      window.location.href = '/user-home';
    }
  };

  // Logout handler
  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <div className="search-result-container">
      <div className="header">
        <span>Chart</span>
        <span>Transactions</span>
        <span onClick={goHome} style={{ cursor: 'pointer', color: 'blue' }}>Home</span>
      </div>

      <h3>Search Results</h3>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Serial Number</th>
            <th>Available</th>
            <th>Select to Issue</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((book, index) => (
            <tr key={index}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.serialNumber}</td>
              <td>{book.available ? 'Yes' : 'No'}</td>
              <td>
                {book.available ? (
                  <button onClick={() => handleIssue(book)}>Issue</button>
                ) : (
                  <input
                    type="radio"
                    name="return"
                    onChange={() => handleReturn(book)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Pay Fine?</h3>
      <table>
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Pay Fine</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.filter(book => book.fineDue).map((book, index) => (
            <tr key={index}>
              <td>{book.author}</td>
              <td>
                <input
                  type="radio"
                  name="payFine"
                  onChange={() => handlePayFine(book)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="logout">
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}
const handleSearch = async (query) => {
    try {
      const response = await fetch(`/books/search?q=${encodeURIComponent(query)}`);
      const results = await response.json();
      setSearchResults(results); // Update state with search results
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  

export default SearchResult;

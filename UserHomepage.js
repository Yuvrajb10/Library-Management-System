import React from 'react';

function UserHomePage() {
  return (
    <div className="user-home-container">
      {/* Header with Chart and Back */}
      <div className="header">
        <span>Chart</span>
        <span>Home Page</span>
        <span>Back</span>
      </div>

      {/* Navigation buttons for Reports, Transactions */}
      <div className="nav-buttons">
        <button>Reports</button>
        <button>Transactions</button>
      </div>

      {/* Product Details Table */}
      <div className="product-details">
        <h2>Product Details</h2>
        <table>
          <thead>
            <tr>
              <th>Code No From</th>
              <th>Code No To</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SC(B/M)000001</td>
              <td>SC(B/M)000004</td>
              <td>Science</td>
            </tr>
            <tr>
              <td>EC(B/M)000001</td>
              <td>EC(B/M)000004</td>
              <td>Economics</td>
            </tr>
            <tr>
              <td>FC(B/M)000001</td>
              <td>FC(B/M)000004</td>
              <td>Fiction</td>
            </tr>
            <tr>
              <td>CH(B/M)000001</td>
              <td>CH(B/M)000004</td>
              <td>Children</td>
            </tr>
            <tr>
              <td>PD(B/M)000001</td>
              <td>PD(B/M)000004</td>
              <td>Personal Development</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Logout Button */}
      <div className="logout">
        <button>Log Out</button>
      </div>
    </div>
  );
}

export default UserHomePage;

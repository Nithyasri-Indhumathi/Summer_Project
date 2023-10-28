import React, { useState } from 'react';
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.length < 8) {
      setError('Invalid username or password.');
    } else {
      setError('');

      // Assuming the user is authenticated successfully, navigate to the QGIS resources page
      window.location.href = '/qgis-resources';
    }
  };

  return (
    <div>
       <div className="login-container">
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
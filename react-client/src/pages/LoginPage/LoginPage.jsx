import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import camera from "../../Assets/Images/camera.png";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add authentication logic here
    navigate("/photos");
  };

  const handleDemo = () => {
    // You can add any demo-specific logic here
    navigate("/photos");
  };

  return (
    <div className="full-page">
      <img src={camera} alt="camera" className="camera" />
      <div className="login-page">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button onClick={handleDemo}>Proceed to Demo</button>
      </div>
    </div>
  );
}

export default LoginPage;

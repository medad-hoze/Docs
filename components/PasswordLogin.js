import React, { useState } from "react";


const PasswordLogin = ({ onPasswordEntered }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "1515") {
      onPasswordEntered();
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    autoFocus
                  />
                  <label htmlFor="password">Password</label>
                </div>
                {error && (
                  <p className="red-text">
                    Incorrect password. Please try again.
                  </p>
                )}
                <button className="btn waves-effect waves-light" type="submit">
                Enter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordLogin;
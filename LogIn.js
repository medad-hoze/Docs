import React from 'react';
import './styles.css';

const LogIn = () => {
    return (
        <div className="login-form">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Login</span>
              <form>
                <div className="input-field">
                  <input type="email" id="email" name="email" required />
                  <label htmlFor="email">Email:</label>
                </div>
    
                <div className="input-field">
                  <input type="password" id="password" name="password" required />
                  <label htmlFor="password">Password:</label>
                </div>
              </form>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light" type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      );
    };

export default LogIn;
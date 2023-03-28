import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="card-row">
          <div className="row">
            <div className="title">
              <h1>Data İşləmləri</h1>
            </div>
            <div className="list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/form">Form</Link>
                </li>
                <li>
                  <Link to="/alldata">AllData</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

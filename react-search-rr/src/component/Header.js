import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="card">
            <div className="title">
              <h1>Xoş Gəlmişsiniz</h1>
            </div>
            <div className="list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/user-comment">Comments</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;

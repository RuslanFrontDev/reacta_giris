import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="card">
        <div className="container">
          <div className="black-div">
            <div className="title">
              <h1>LOGO</h1>
            </div>
            <div className="home">
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;

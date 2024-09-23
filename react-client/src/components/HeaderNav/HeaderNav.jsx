import "./HeaderNav.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/save-a-smile-logo.svg";

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Save A Smile Logo" />
          <p>save a smile for a rainy day</p>
        </Link>
      </div>
      <div className="header__buttons">
        <Link to="/photos">
          <button>Home</button>
        </Link>
        <Link to="/gallery">
          <button>Gallery</button>
        </Link>
        <Link to="/upload">
          <button>Upload +</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

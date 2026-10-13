

import { Link } from "react-router-dom";
import "./Header_com.css";

function Header_component() {
  return (
    <div className="header">
      <h2>My Website</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
    </div>
  );
}

export default Header_component;

import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <nav className={`navbar ${dark ? "dark" : ""}`}>
        <h2>PixelStack Technologies</h2>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li>
          <button onClick={() => {
            document.body.classList.toggle("dark");
            setDark(!dark);
          }}>
            {dark ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

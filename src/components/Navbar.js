import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar is-dark" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="www.youtube.com">
          <img
            src="https://bulma.io/images/bulma-logo-white.png"
            width="112"
            height="28"
            alt="Logo"
          />
        </a>
        
        <Link className="navbar-item" to="/actividades">
          <span class="icon-text">
            <span class="icon">
            <i class="fas fa-list-ul"></i>
            </span>
            <span>Actividades</span>
          </span>
        </Link>

        <Link className="navbar-item" to="/">
          <span class="icon-text">
            <span class="icon">
            <i class="fas fa-border-all"></i>
            </span>
            <span>Historias de Usuario</span>
          </span>
        </Link>
        
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
					{/* Aquí iría algo */}
        </div>

        <div className="navbar-end">
					{/* Aquí iría algo */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

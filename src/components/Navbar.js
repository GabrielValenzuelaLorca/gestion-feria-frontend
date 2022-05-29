import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../store/actions/userActions";

const Navbar = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const logout = () => {
    window.sessionStorage.removeItem('user');
    dispatch(removeUser());
  }
  
  return (
    <header>  
      <nav className="navbar is-dark" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-burger"/>
          <a className="navbar-item" href="www.youtube.com">
            <img
              src="https://bulma.io/images/bulma-logo-white.png"
              width="112"
              height="28"
              alt="Logo"
            />
          </a>
          
          <Link className="navbar-item" to="/actividades">
            <span className="icon-text">
              <span className="icon">
                <i className="fas fa-list-ul"></i>
              </span>
              <span>Actividades</span>
            </span>
          </Link>

          <Link className="navbar-item" to="/historias">
            <span className="icon-text">
              <span className="icon">
                <i className="fas fa-border-all"></i>
              </span>
              <span>Historias de Usuario</span>
            </span>
          </Link>
          
          <Link className="navbar-item" to="/dashboard">
            <span className="icon-text">
              <span className="icon">
                <i className="fas fa-chart-line"></i>
              </span>
              <span>Dashboard</span>
            </span>
          </Link>

          <Link className="navbar-item" to="/rubricas">
            <span className="icon-text">
              <span className="icon">
                <i className="fas fa-clipboard-list"></i>
              </span>
              <span>Rúbricas</span>
            </span>
          </Link>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            {/* Aquí iría algo */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                {user.name}
              </div>

              <div className="navbar-dropdown is-right">
                <Link className="navbar-item" to="/usuario">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fas fa-user"></i>
                    </span>
                    <span>Perfil</span>
                  </span>
                </Link>

                <Link className="navbar-item" to="/equipo">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fas fa-users"></i>
                    </span>
                    <span>Equipo</span>
                  </span>
                </Link>

                <Link className="navbar-item" to="/entregables">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fas fa-box"></i>
                    </span>
                    <span>Entregables</span>
                  </span>
                </Link>

                <hr className="navbar-divider"/>

                <div className="navbar-item">
                  <button className="button is-danger" onClick={logout}>
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

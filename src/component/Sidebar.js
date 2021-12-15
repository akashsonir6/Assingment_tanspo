import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div id="sidebar-menu">
        <header className="main-header">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src="assets/images/logo.jpeg" alt="" />
            </Link>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <img src="assets/images/icons/speedometer2.svg" alt="" />
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <img src="assets/images/icons/pin-map-fill.svg" alt="" />
                    Tips
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <img src="assets/images/icons/people-fill.svg" alt="" />
                    Tracking
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <img src="assets/images/icons/compass.svg" alt="" />
                    Transporters
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="">
                    <img
                      src="assets/images/icons/bar-chart-line-fill.svg"
                      alt=""
                    />
                    Analytics
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className="nav-item m-0">
                  <Link to="">
                    <img src="assets/images/icons/gear.svg" alt="" />
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Sidebar;

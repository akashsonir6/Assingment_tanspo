import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div id="sidebar-menu">
        <header className="main-header">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img src="assets/images/logo.jpeg" alt="" />
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="">
                    <img src="assets/images/icons/speedometer2.svg" alt="" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img src="assets/images/icons/pin-map-fill.svg" alt="" />
                    Tips
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img src="assets/images/icons/people-fill.svg" alt="" />
                    Tracking
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img src="assets/images/icons/compass.svg" alt="" />
                    Transporters
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img
                      src="assets/images/icons/bar-chart-line-fill.svg"
                      alt=""
                    />
                    Analytics
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className="nav-item m-0">
                  <a href="">
                    <img src="assets/images/icons/gear.svg" alt="" />
                    Settings
                  </a>
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

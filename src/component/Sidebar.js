import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div id="sidebar-menu">
        <header class="main-header">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
              <img src="assets/images/logo.jpeg" alt="" />
            </a>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="">
                    <img src="assets/images/icons/speedometer2.svg" alt="" />
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    <img src="assets/images/icons/speedometer2.svg" alt="" />
                    Tips
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    <img src="assets/images/icons/gear.svg" alt="" />
                    Tracking
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="">
                    <img src="assets/images/icons/compass.svg" alt="" />
                    Transporters
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="">
                    <img src="assets/images/icons/gear.svg" alt="" />
                    Analytics
                  </a>
                </li>
              </ul>

              <ul class="navbar-nav">
                <li class="nav-item m-0">
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

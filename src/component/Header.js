import React from "react";

const Header = () => {
  return (
    <div>
      <div id="top-navbar">
        <header class="top-nav-header">
          <nav class="navbar navbar-expand-lg">
            <div class="listing-btn drop-btn">
              <div class="select-btn new-ticket">
                <div class="btn__trigger">Tracking</div>
                <div class="btn-options">
                  <span class="btn-option" data-value="Tracking 1">
                    Tracking 1
                  </span>
                  <span class="btn-option" data-value="Tracking 2">
                    Tracking 2
                  </span>
                  <span class="btn-option" data-value="Tracking 3">
                    Tracking 3
                  </span>
                  <span class="btn-option" data-value="Tracking 4">
                    Tracking 4
                  </span>
                </div>
                <img src="" alt="" />
              </div>
            </div>
            <form class="search-form">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <img src="assets/images/icons/search.svg" alt="" />
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </form>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;

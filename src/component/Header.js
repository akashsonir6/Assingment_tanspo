import React from "react";

const Header = () => {
  return (
    <div>
      <div id="top-navbar">
        <header className="top-nav-header">
          <nav className="navbar navbar-expand-lg">
            <div className="listing-btn drop-btn">
              <div className="select-btn new-ticket">
                <div className="btn__trigger">Tracking</div>
                <div className="btn-options">
                  <span className="btn-option" data-value="Tracking 1">
                    Tracking 1
                  </span>
                  <span className="btn-option" data-value="Tracking 2">
                    Tracking 2
                  </span>
                  <span className="btn-option" data-value="Tracking 3">
                    Tracking 3
                  </span>
                  <span className="btn-option" data-value="Tracking 4">
                    Tracking 4
                  </span>
                </div>
                <img src="" alt="" />
              </div>
            </div>
            <form className="search-form">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <img src="assets/images/icons/search.svg" alt="" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </form>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;

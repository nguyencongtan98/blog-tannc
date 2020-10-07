import React from "react";

export const Header = () => {
  return (
    <header className="header-section">
      <div className="header-warp">
        <div className="header-social d-flex justify-content-end">
          <p>Follow us:</p>
          <a href="#">
            <i className="fa fa-pinterest"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-behance"></i>
          </a>
        </div>
        <div className="header-bar-warp d-flex">
          <a href="home.html" className="site-logo">
            <img src="./img/logo.png" alt="" />
          </a>
          <nav className="top-nav-area w-100">
            <div className="user-panel">
              <a href="">Login</a> / <a href="">Register</a>
            </div>
            {/* <!-- Menu --> */}
            <ul className="main-menu primary-menu">
              <li>
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="games.html">Study</a>
                <ul className="sub-menu">
                  <li>
                    <a href="game-single.html">ReactJS</a>
                  </li>
                  <li>
                    <a href="game-single.html">Java Core</a>
                  </li>
                  <li>
                    <a href="game-single.html">HTML CSS</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="games.html">Source code Demo</a>
                <ul className="sub-menu">
                  <li>
                    <a href="game-single.html">ReactJS</a>
                  </li>
                  <li>
                    <a href="game-single.html">Java Core</a>
                  </li>
                  <li>
                    <a href="game-single.html">HTML CSS</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

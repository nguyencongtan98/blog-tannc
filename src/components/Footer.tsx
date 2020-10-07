import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-left-pic">
          <img src="img/footer-left-pic.png" alt="" />
        </div>
        <div className="footer-right-pic">
          <img src="img/footer-right-pic.png" alt="" />
        </div>
        <a href="#" className="footer-logo">
          <img src="./img/logo.png" alt="" />
        </a>
        <ul className="main-menu footer-menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Games</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="footer-social d-flex justify-content-center">
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
        <div className="copyright">
          <a href="">Colorlib</a> 2018 @ All rights reserved
        </div>
      </div>
    </footer>
  );
};

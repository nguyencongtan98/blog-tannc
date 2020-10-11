import React from "react";
import { Content3 } from "../Content3";
import { Content1 } from "./Content1";
import { Content2 } from "./Content2";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { SlideShow } from "./SlideShow";

export const Home = () => {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <div className="header-top">
        <Header />
        <Menu />
      </div>

      <SlideShow />
      {/* END section */}

    
      <div className="site-section">
        <div className="container">
          <div className="row">
            <Content1 />
            <Content1 />
            <Content1 />
            <Content1 />
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <Content2 />
            <Content3 />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="custom-pagination list-unstyled">
                <li>
                  <a href="fdf">1</a>
                </li>
                <li className="active">2</li>
                <li>
                  <a href="fd">3</a>
                </li>
                <li>
                  <a href="fdf">4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section subscribe bg-light">
        <div className="container">
          <form action="#" className="row align-items-center">
            <div className="col-md-5 mr-auto">
              <h2>Newsletter Subcribe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis aspernatur ut at quae omnis pariatur obcaecati
                possimus nisi ea iste!
              </p>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-secondary">
                  <span className="icon-paper-plane" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

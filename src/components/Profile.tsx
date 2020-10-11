import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";
import data from "../data/profile.json";

export const Profile = () => {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-4">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <div className="header-top">
        <Header />
        <Menu />
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card text-left ">
                <h4 className="card-title text-center mt-4">
                  PROFESSIONALL DETAILS
                </h4>
                <hr />
                <img className="card-img-top" src="images/anhthe.jpg" alt="" />
                <div className="card-body">
                  <div className="row">
                    <h6 className="col-4 card-title">Name</h6>
                    <h6 className="col-8 card-text">{data.name}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-4 card-title">Age</h6>
                    <h6 className="col-8 card-text">{data.age}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-4 card-title">Gender</h6>
                    <h6 className="col-8 card-text">{data.gender}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-4 card-title">Phone</h6>
                    <h6 className="col-8 card-text">{data.phone}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-4 card-title">Address</h6>
                    <h6 className="col-8 card-text">{data.address}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-8">
              <div className="card text-left ">
                <h4 className="card-title mt-4 ml-4">ABOUT ME</h4> <hr />
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <h4 className="col-5 card-title">NAME</h4>
                      <div className="col-7 card-text">fdfdfdf</div>
                    </div>
                    <div className="col-6">
                      <h4 className="col-5 card-title">NAME</h4>
                      <div className="col-7 card-text">fdfdfdf</div>
                    </div>
                    I'M WEB DESIGN
                  </div>
                </div>
                <hr />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                modi, sapiente, est rem harum dolorum officia perferendis
                debitis corporis vero cum voluptates at maiores esse quidem.
                Aspernatur harum cumque tenetur.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

    // dfdfdfdfdfdf
  );
};

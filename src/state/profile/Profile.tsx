import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileInfo } from "../../@types/types";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { RootState } from "../stores";
import { updateProfile } from "./action";

export const Profile = (): JSX.Element => {
  const profileData: ProfileInfo = useSelector<RootState, ProfileInfo>(
    (state) => state.profileReducer
  );
  console.log(profileData);

  const dispatch = useDispatch();

  const onUpdateProfile = () => {
    dispatch(
      updateProfile({
        name: "HEHEH",
        age: 123121,
        phone: "HEHEH",
        address: "HEHEH",
        gender: "HEHEH",
      })
    );
  };

  const elementProfile = (
    <div className="card text-left ">
      <h4 className="card-title text-center mt-4">PROFESSIONALL DETAILS</h4>
      <hr />
      <img className="card-img-top" src="images/anhthe.jpg" alt="" />
      <div className="card-body">
        <div className="row">
          <h6 className="col-4 card-title">Name</h6>
          <h6 className="col-8 card-text">{profileData.name}</h6>
        </div>
        <div className="row">
          <h6 className="col-4 card-title">Age</h6>
          <h6 className="col-8 card-text">{profileData.age}</h6>
        </div>
        <div className="row">
          <h6 className="col-4 card-title">Gender</h6>
          <h6 className="col-8 card-text">{profileData.gender}</h6>
        </div>
        <div className="row">
          <h6 className="col-4 card-title">Phone</h6>
          <h6 className="col-8 card-text">{profileData.phone}</h6>
        </div>
        <div className="row">
          <h6 className="col-4 card-title">Address</h6>
          <h6 className="col-8 card-text">{profileData.address}</h6>
        </div>
      </div>
    </div>
  );

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
              {elementProfile}
              <button
                type="button"
                onClick={onUpdateProfile}
                className="btn btn-primary"
              >
                UPDATE
              </button>
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
                    <div className="col-6">
                      <h4 className="col-5 card-title">NAME</h4>
                      <div className="col-7 card-text">fdfdfdf</div>
                    </div>
                    <div className="col-6">
                      <h4 className="col-5 card-title">NAME</h4>
                      <div className="col-7 card-text">fdfdfdf</div>
                    </div>
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
  );
};

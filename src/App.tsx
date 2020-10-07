import React from "react";
import { BlogItem } from "./components/BlogItem";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { StickyBar } from "./components/StickyBar";

function App() {
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
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 d-flex">
                  <a href="index.html" className="site-logo">
                    Meranda
                  </a>
                  <a href="#" className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></a>
                </div>
                <div className="col-12 col-lg-6 ml-auto d-flex">
                  <div className="ml-md-auto top-social d-none d-lg-inline-block">
                    <a href="#" className="d-inline-block p-3"><span className="icon-facebook" /></a>
                    <a href="#" className="d-inline-block p-3"><span className="icon-twitter" /></a>
                    <a href="#" className="d-inline-block p-3"><span className="icon-instagram" /></a>
                  </div>
                  <form action="#" className="search-form d-inline-block">
                    <div className="d-flex">
                      <input type="email" className="form-control" placeholder="Search..." />
                      <button type="submit" className="btn btn-secondary"><span className="icon-search" /></button>
                    </div>
                  </form>
                </div>
                <div className="col-6 d-block d-lg-none text-right">
                </div>
              </div>
            </div>
            <div className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">
              <div className="container">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <nav className="site-navigation position-relative text-right" role="navigation">
                      <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                        <li className="active">
                          <a href="index.html" className="nav-link text-left">Home</a>
                        </li>
                        <li>
                          <a href="categories.html" className="nav-link text-left">Categories</a>
                        </li>
                        <li>
                          <a href="categories.html" className="nav-link text-left">Politics</a>
                        </li>
                        <li>
                          <a href="categories.html" className="nav-link text-left">Business</a>
                        </li>
                        <li>
                          <a href="categories.html" className="nav-link text-left">Health</a>
                        </li>
                        <li><a href="categories.html" className="nav-link text-left">Design</a></li>
                        <li>
                          <a href="categories.html" className="nav-link text-left">Sport</a>
                        </li>
                        <li><a href="contact.html" className="nav-link text-left">Contact</a></li>
                      </ul>                                                                                                                                                                                                                                                                                         
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section py-0">
            <div className="owl-carousel hero-slide owl-style">
              <div className="site-section">
                <div className="container">
                  <div className="half-post-entry d-block d-lg-flex bg-light">
                    <div className="img-bg" style={{backgroundImage: 'url("images/big_img_1.jpg")'}} />
                    <div className="contents">
                      <span className="caption">Editor's Pick</span>
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-section">
                <div className="container">
                  <div className="half-post-entry d-block d-lg-flex bg-light">
                    <div className="img-bg" style={{backgroundImage: 'url("images/big_img_1.jpg")'}} />
                    <div className="contents">
                      <span className="caption">Editor's Pick</span>
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-title">
                        <h2>Editor's Pick</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="post-entry-1">
                        <a href="post-single.html"><img src="images/img_h_1.jpg" alt="Image" className="img-fluid" /></a>
                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                        <div className="post-meta">
                          <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                          <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="post-entry-2 d-flex bg-light">
                        <div className="thumbnail" style={{backgroundImage: 'url("images/img_v_1.jpg")'}} />
                        <div className="contents">
                          <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                          <div className="post-meta">
                            <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                            <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                          </div>
                        </div>
                      </div>
                      <div className="post-entry-2 d-flex">
                        <div className="thumbnail" style={{backgroundImage: 'url("images/img_v_2.jpg")'}} />
                        <div className="contents">
                          <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                          <div className="post-meta">
                            <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                            <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                          </div>
                        </div>
                      </div>
                      <div className="post-entry-2 d-flex">
                        <div className="thumbnail" style={{backgroundImage: 'url("images/img_v_3.jpg")'}} />
                        <div className="contents">
                          <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                          <div className="post-meta">
                            <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                            <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="section-title">
                    <h2>Trending</h2>
                  </div>
                  <div className="trend-entry d-flex">
                    <div className="number align-self-start">01</div>
                    <div className="trend-contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="trend-entry d-flex">
                    <div className="number align-self-start">02</div>
                    <div className="trend-contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="trend-entry d-flex">
                    <div className="number align-self-start">03</div>
                    <div className="trend-contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="trend-entry d-flex">
                    <div className="number align-self-start">04</div>
                    <div className="trend-contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <p>
                    <a href="#" className="more">See All Trends <span className="icon-keyboard_arrow_right" /></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* END section */}
          <div className="py-0">
            <div className="container">
              <div className="half-post-entry d-block d-lg-flex bg-light">
                <div className="img-bg" style={{backgroundImage: 'url("images/big_img_1.jpg")'}} />
                <div className="contents">
                  <span className="caption">Editor's Pick</span>
                  <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                  <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                  <div className="post-meta">
                    <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
                    <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h2>Politics</h2>
                  </div>
                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail" style={{backgroundImage: 'url("images/img_v_1.jpg")'}} />
                    <div className="contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail" style={{backgroundImage: 'url("images/img_v_2.jpg")'}} />
                    <div className="contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail" style={{backgroundImage: 'url("images/img_v_3.jpg")'}} />
                    <div className="contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="section-title">
                    <h2>Business</h2>
                  </div>
                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail" style={{backgroundImage: 'url("images/img_v_1.jpg")'}} />
                    <div className="contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail" style={{backgroundImage: 'url("images/img_v_2.jpg")'}} />
                    <div className="contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail" style={{backgroundImage: 'url("images/img_v_3.jpg")'}} />
                    <div className="contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="section-title">
                    <h2>Recent News</h2>
                  </div>
                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail order-md-2" style={{backgroundImage: 'url("images/img_h_4.jpg")'}} />
                    <div className="contents order-md-1 pl-0">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail order-md-2" style={{backgroundImage: 'url("images/img_h_3.jpg")'}} />
                    <div className="contents order-md-1 pl-0">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="post-entry-2 d-flex">
                    <div className="thumbnail order-md-2" style={{backgroundImage: 'url("images/img_h_3.jpg")'}} />
                    <div className="contents order-md-1 pl-0">
                      <span className="caption mb-4 d-block">Editor's Pick</span>
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="section-title">
                    <h2>Popular Posts</h2>
                  </div>
                  <div className="trend-entry d-flex">
                    <div className="number align-self-start">01</div>
                    <div className="trend-contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="trend-entry d-flex">
                    <div className="number align-self-start">02</div>
                    <div className="trend-contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="trend-entry d-flex">
                    <div className="number align-self-start">03</div>
                    <div className="trend-contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="trend-entry d-flex pl-0">
                    <div className="number align-self-start">04</div>
                    <div className="trend-contents">
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span className="icon-star2" /></span>
                      </div>
                    </div>
                  </div>
                  <p>
                    <a href="#" className="more">See All Popular <span className="icon-keyboard_arrow_right" /></a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="custom-pagination list-unstyled">
                    <li><a href="#">1</a></li>
                    <li className="active">2</li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
                </div>
                <div className="col-md-6 ml-auto">
                  <div className="d-flex">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                    <button type="submit" className="btn btn-secondary"><span className="icon-paper-plane" /></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="copyright">
                    <p>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default App;

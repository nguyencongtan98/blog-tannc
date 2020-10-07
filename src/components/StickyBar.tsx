import React from "react";

export const StickyBar = () => {
  return (
    <div id="stickySidebar">
      <div className="widget-item">
        <h4 className="widget-title">Trending</h4>
        <div className="trending-widget">
          <div className="tw-item">
            <div className="tw-thumb">
              <img src="./img/blog-widget/1.jpg" alt="#" />
            </div>
            <div className="tw-text">
              <div className="tw-meta">
                11.11.18 / in <a href="">Games</a>
              </div>
              <h5>The best online game is out now!</h5>
            </div>
          </div>
          <div className="tw-item">
            <div className="tw-thumb">
              <img src="./img/blog-widget/2.jpg" alt="#" />
            </div>
            <div className="tw-text">
              <div className="tw-meta">
                11.11.18 / in <a href="">Games</a>
              </div>
              <h5>The best online game is out now!</h5>
            </div>
          </div>
          <div className="tw-item">
            <div className="tw-thumb">
              <img src="./img/blog-widget/3.jpg" alt="#" />
            </div>
            <div className="tw-text">
              <div className="tw-meta">
                11.11.18 / in <a href="">Games</a>
              </div>
              <h5>The best online game is out now!</h5>
            </div>
          </div>
          <div className="tw-item">
            <div className="tw-thumb">
              <img src="./img/blog-widget/4.jpg" alt="#" />
            </div>
            <div className="tw-text">
              <div className="tw-meta">
                11.11.18 / in <a href="">Games</a>
              </div>
              <h5>The best online game is out now!</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-item">
        <div className="categories-widget">
          <h4 className="widget-title">categories</h4>
          <ul>
            <li>
              <a href="">Games</a>
            </li>
            <li>
              <a href="">Gaming Tips & Tricks</a>
            </li>
            <li>
              <a href="">Online Games</a>
            </li>
            <li>
              <a href="">Team Games</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Uncategorized</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="widget-item">
        <a href="#" className="add">
          <img src="./img/add.jpg" alt="" />
        </a>
      </div>
    </div>
  );
};

import React from "react";

export const BlogItem = () => {
  return (
    <div className="blog-item">
      <div className="blog-thumb">
        <img src="./img/blog/1.jpg" alt="" />
      </div>
      <div className="blog-text text-box text-white">
        <div className="top-meta">
          11.11.18 / in <a href="">Games</a>
        </div>
        <h3>The best online game is out now!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis
          ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet,
          consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.....
        </p>
        <a href="#" className="read-more">
          Read More <img src="img/icons/double-arrow.png" alt="#" />
        </a>
      </div>
    </div>
  );
};
